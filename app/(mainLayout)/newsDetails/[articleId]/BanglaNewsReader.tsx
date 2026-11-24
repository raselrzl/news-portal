
"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  Play,
  Pause,
  Square,
  Volume2,
  AlertCircle,
  RotateCcw,
  CheckCircle2,
} from "lucide-react";

type BanglaNewsReaderProps = {
  heading?: string | null;
  details?: string | null;
};

type ReaderStatus =
  | "idle"
  | "playing"
  | "paused"
  | "blocked"
  | "finished"
  | "error";

const CHUNK_LIMIT = 180;
const NEXT_CHUNK_DELAY = 150;

function decodeHtmlEntities(value: string): string {
  if (typeof document === "undefined") return value;

  const textarea = document.createElement("textarea");
  textarea.innerHTML = value;
  return textarea.value;
}

function normalizeText(value: string): string {
  return value
    .replace(/\u00a0/g, " ")
    .replace(/\u200b/g, "")
    .replace(/[\t\r]+/g, " ")
    .replace(/[ ]{2,}/g, " ")
    .replace(/[ \t]*\n[ \t]*/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ \t]+([।!?.,;:])/g, "$1")
    .trim();
}

/**
 * Extract readable content from plain text, HTML and rich-text JSON.
 * Ignores editor metadata and preserves the complete article content.
 */
function extractReadableText(input?: string | null): string {
  if (!input) return "";

  const source = input.trim();
  if (!source) return "";

  // Handle rich-text JSON.
  try {
    const parsed: unknown = JSON.parse(source);

    const ignoredKeys = new Set([
      "attrs",
      "attributes",
      "marks",
      "mark",
      "style",
      "styles",
      "id",
      "type",
      "level",
      "align",
      "textAlign",
      "href",
      "url",
      "src",
      "target",
      "rel",
      "className",
      "class",
    ]);

    const blockKeys = new Set([
      "content",
      "children",
      "blocks",
      "paragraphs",
      "items",
      "nodes",
      "root",
      "document",
      "data",
    ]);

    const collect = (node: unknown): string => {
      if (node == null || typeof node === "boolean") return "";

      if (typeof node === "string") return node;
      if (typeof node === "number") return String(node);

      if (Array.isArray(node)) {
        return node.map(collect).filter(Boolean).join("\n");
      }

      if (typeof node !== "object") return "";

      const record = node as Record<string, unknown>;

      if (typeof record.text === "string") {
        return record.text;
      }

      const keys = Object.keys(record);

      const structural = keys.filter((key) =>
        blockKeys.has(key),
      );

      const selected = structural.length
        ? structural
        : keys.filter((key) => !ignoredKeys.has(key));

      return selected
        .map((key) => collect(record[key]))
        .filter(Boolean)
        .join("\n");
    };

    const result = normalizeText(collect(parsed));

    if (result) return result;
  } catch {
    // Not JSON. Continue with HTML/plain-text extraction.
  }

  // Handle HTML and preserve paragraph boundaries.
  if (
    typeof window !== "undefined" &&
    /<\/?[a-z][\s\S]*>/i.test(source)
  ) {
    const parsed = new DOMParser().parseFromString(
      source,
      "text/html",
    );

    parsed
      .querySelectorAll(
        "script, style, noscript, iframe, svg, button",
      )
      .forEach((element) => element.remove());

    const blockTags = new Set([
      "ADDRESS",
      "ARTICLE",
      "BLOCKQUOTE",
      "DIV",
      "FIGCAPTION",
      "H1",
      "H2",
      "H3",
      "H4",
      "H5",
      "H6",
      "LI",
      "OL",
      "P",
      "SECTION",
      "TABLE",
      "TR",
      "UL",
      "BR",
    ]);

    const walk = (node: Node): string => {
      if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent ?? "";
      }

      if (
        node.nodeType !== Node.ELEMENT_NODE &&
        node.nodeType !== Node.DOCUMENT_NODE
      ) {
        return "";
      }

      const element = node as Element;

      const content = Array.from(node.childNodes)
        .map(walk)
        .join("");

      return blockTags.has(element.tagName)
        ? `\n${content}\n`
        : content;
    };

    const result = normalizeText(walk(parsed.body));

    if (result) return result;
  }

  return normalizeText(
    decodeHtmlEntities(source.replace(/<[^>]*>/g, " ")),
  );
}

/**
 * Splits text without losing any words.
 */
function splitLongWord(word: string, limit: number): string[] {
  const Segmenter = (
    Intl as unknown as {
      Segmenter?: new (
        locale?: string,
        options?: { granularity: "grapheme" },
      ) => {
        segment(input: string): Iterable<{ segment: string }>;
      };
    }
  ).Segmenter;

  const characters = Segmenter
    ? Array.from(
        new Segmenter("bn", {
          granularity: "grapheme",
        }).segment(word),
        (part) => part.segment,
      )
    : Array.from(word);

  const pieces: string[] = [];
  let current = "";

  for (const character of characters) {
    if (
      current.length + character.length > limit &&
      current
    ) {
      pieces.push(current);
      current = character;
    } else {
      current += character;
    }
  }

  if (current) pieces.push(current);

  return pieces;
}

/**
 * Splits the full article into sequential speech chunks.
 * Does not truncate the article.
 */
function splitIntoChunks(
  text: string,
  maxLength = CHUNK_LIMIT,
): string[] {
  const sentences = text
    .split(/(?<=[।!?])\s*|\n+/u)
    .map((part) => part.trim())
    .filter(Boolean);

  const chunks: string[] = [];
  let current = "";

  const pushCurrent = () => {
    if (current.trim()) {
      chunks.push(current.trim());
    }

    current = "";
  };

  for (const sentence of sentences) {
    const words = sentence.split(/\s+/).filter(Boolean);

    for (const originalWord of words) {
      const pieces =
        originalWord.length > maxLength
          ? splitLongWord(originalWord, maxLength)
          : [originalWord];

      for (const word of pieces) {
        const next = current
          ? `${current} ${word}`
          : word;

        if (next.length > maxLength && current) {
          pushCurrent();
        }

        current = current
          ? `${current} ${word}`
          : word;
      }
    }

    pushCurrent();
  }

  pushCurrent();

  return chunks;
}

function getBanglaVoice(): SpeechSynthesisVoice | undefined {
  if (
    typeof window === "undefined" ||
    !("speechSynthesis" in window)
  ) {
    return undefined;
  }

  const voices = window.speechSynthesis.getVoices();

  return (
    voices.find((voice) => /^bn[-_]BD$/i.test(voice.lang)) ||
    voices.find((voice) => /^bn[-_]/i.test(voice.lang)) ||
    voices.find((voice) =>
      /bangla|bengali/i.test(voice.name),
    )
  );
}

export default function BanglaNewsReader({
  heading,
  details,
}: BanglaNewsReaderProps) {
  const [status, setStatus] = useState<ReaderStatus>("idle");
  const [supported, setSupported] = useState(true);
  const [voiceAvailable, setVoiceAvailable] = useState(false);
  const [message, setMessage] = useState("");

  const [progress, setProgress] = useState({
    current: 0,
    total: 0,
  });

  const chunksRef = useRef<string[]>([]);
  const currentChunkRef = useRef(0);
  const stoppedRef = useRef(true);
  const generationRef = useRef(0);

  // Browser setTimeout returns a number.
  const timerRef = useRef<number | null>(null);

  const fullText = useMemo(() => {
    const titleText = extractReadableText(heading);
    const bodyText = extractReadableText(details);

    return [
      titleText ? `শিরোনাম। ${titleText}` : "",
      bodyText,
    ]
      .filter(Boolean)
      .join("\n\n");
  }, [heading, details]);

  const clearNextTimer = useCallback(() => {
    if (timerRef.current !== null) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const stopSpeech = useCallback(
    (nextStatus: ReaderStatus = "idle") => {
      generationRef.current += 1;
      stoppedRef.current = true;

      clearNextTimer();

      if (
        typeof window !== "undefined" &&
        "speechSynthesis" in window
      ) {
        window.speechSynthesis.cancel();
      }

      currentChunkRef.current = 0;

      setProgress({
        current: 0,
        total: chunksRef.current.length,
      });

      setStatus(nextStatus);
    },
    [clearNextTimer],
  );

  const speakChunk = useCallback(
    (generation: number) => {
      if (
        stoppedRef.current ||
        generation !== generationRef.current
      ) {
        return;
      }

      // All chunks have been read.
      if (
        currentChunkRef.current >= chunksRef.current.length
      ) {
        stoppedRef.current = true;

        setStatus("finished");

        setProgress({
          current: chunksRef.current.length,
          total: chunksRef.current.length,
        });

        setMessage("সম্পূর্ণ সংবাদ পড়া শেষ হয়েছে।");

        return;
      }

      const text = chunksRef.current[currentChunkRef.current];

      if (!text) {
        currentChunkRef.current += 1;
        speakChunk(generation);
        return;
      }

      const utterance = new SpeechSynthesisUtterance(text);

      utterance.lang = "bn-BD";
      utterance.rate = 0.88;
      utterance.pitch = 1;
      utterance.volume = 1;

      const voice = getBanglaVoice();

      if (voice) {
        utterance.voice = voice;
      }

      utterance.onstart = () => {
        if (generation !== generationRef.current) return;

        setStatus("playing");
        setMessage("");

        setProgress({
          current: currentChunkRef.current + 1,
          total: chunksRef.current.length,
        });
      };

      utterance.onend = () => {
        if (
          stoppedRef.current ||
          generation !== generationRef.current
        ) {
          return;
        }

        currentChunkRef.current += 1;

        setProgress({
          current: currentChunkRef.current,
          total: chunksRef.current.length,
        });

        clearNextTimer();

        timerRef.current = window.setTimeout(() => {
          timerRef.current = null;
          speakChunk(generation);
        }, NEXT_CHUNK_DELAY);
      };

      utterance.onerror = (event) => {
        if (generation !== generationRef.current) return;

        if (
          event.error === "canceled" ||
          event.error === "interrupted"
        ) {
          return;
        }

        stoppedRef.current = true;
        clearNextTimer();

        if (event.error === "not-allowed") {
          setStatus("blocked");

          setMessage(
            "ব্রাউজার অডিও চালানোর অনুমতি দেয়নি। আবার শুনুন বাটনে চাপ দিন।",
          );

          return;
        }

        setStatus("error");

        setMessage(
          `অডিও ${currentChunkRef.current + 1} নম্বর অংশে থেমে গেছে। আবার শুনুন বাটনে চাপ দিন।`,
        );

        console.error(
          "Bangla speech synthesis error:",
          event.error,
        );
      };

      window.speechSynthesis.speak(utterance);
    },
    [clearNextTimer],
  );

  const startReading = useCallback(
    (fromBeginning = true) => {
      if (
        typeof window === "undefined" ||
        !("speechSynthesis" in window)
      ) {
        setSupported(false);
        setMessage(
          "আপনার ব্রাউজারে টেক্সট-টু-স্পিচ সুবিধা নেই।",
        );
        return;
      }

      if (!fullText.trim()) {
        setMessage(
          "এই সংবাদে পড়ার মতো কোনো লেখা পাওয়া যায়নি।",
        );
        return;
      }

      clearNextTimer();

      // Cancel previous playback and invalidate old callbacks.
      generationRef.current += 1;
      stoppedRef.current = true;

      window.speechSynthesis.cancel();

      if (fromBeginning || chunksRef.current.length === 0) {
        chunksRef.current = splitIntoChunks(fullText);
        currentChunkRef.current = 0;
      }

      if (!chunksRef.current.length) {
        setStatus("error");
        setMessage(
          "সংবাদের লেখা থেকে অডিও তৈরি করা যায়নি।",
        );
        return;
      }

      stoppedRef.current = false;

      const generation = ++generationRef.current;

      setStatus("playing");
      setMessage("");

      setProgress({
        current: currentChunkRef.current + 1,
        total: chunksRef.current.length,
      });

      timerRef.current = window.setTimeout(() => {
        timerRef.current = null;
        speakChunk(generation);
      }, 250);
    },
    [clearNextTimer, fullText, speakChunk],
  );

  const pauseReading = useCallback(() => {
    if (!("speechSynthesis" in window)) return;

    window.speechSynthesis.pause();
    setStatus("paused");
  }, []);

  const resumeReading = useCallback(() => {
    if (!("speechSynthesis" in window)) return;

    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setStatus("playing");
      return;
    }

    // Continue from the current chunk if the browser lost its queue.
    stoppedRef.current = false;

    const generation = ++generationRef.current;

    setStatus("playing");
    setMessage("");

    speakChunk(generation);
  }, [speakChunk]);

  const stopReading = useCallback(() => {
    stopSpeech("idle");
    setMessage("অডিও বন্ধ করা হয়েছে।");
  }, [stopSpeech]);

  // Prepare the article when the component mounts.
  // Do not autoplay: browsers commonly block speech without a user gesture.
  useEffect(() => {
    chunksRef.current = splitIntoChunks(fullText);

    setProgress({
      current: 0,
      total: chunksRef.current.length,
    });

    setStatus("idle");
    setMessage("");

    return () => {
      generationRef.current += 1;
      stoppedRef.current = true;

      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }

      if ("speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [fullText]);

  // Detect available browser voices.
  useEffect(() => {
    if (!("speechSynthesis" in window)) {
      setSupported(false);
      return;
    }

    const updateVoices = () => {
      setVoiceAvailable(Boolean(getBanglaVoice()));
    };

    updateVoices();

    window.speechSynthesis.addEventListener(
      "voiceschanged",
      updateVoices,
    );

    return () => {
      window.speechSynthesis.removeEventListener(
        "voiceschanged",
        updateVoices,
      );
    };
  }, []);

  if (!supported) {
    return (
      <div className="mb-4 border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
        আপনার ব্রাউজারে বাংলা সংবাদ শোনার সুবিধা সমর্থিত নয়।
      </div>
    );
  }

  const isActive =
    status === "playing" || status === "paused";

  const canStart =
    status === "idle" ||
    status === "blocked" ||
    status === "finished" ||
    status === "error";

  const percentage =
    progress.total > 0
      ? Math.min(
          100,
          (progress.current / progress.total) * 100,
        )
      : 0;

  return (
    <section
      aria-label="বাংলা সংবাদ শোনার সুবিধা"
      className="mb-4 border border-gray-200 bg-gray-50 p-3"
    >
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <Volume2 className="size-5 shrink-0 text-sky-800" />

          <div className="min-w-0">
            <p className="text-sm font-bold text-gray-900">
              বাংলা সংবাদ শুনুন
            </p>

            <p
              className="text-xs text-gray-500"
              aria-live="polite"
            >
              {status === "playing"
                ? `সংবাদ পড়া হচ্ছে — ${progress.current}/${progress.total} অংশ`
                : status === "paused"
                  ? "সংবাদ সাময়িকভাবে বন্ধ আছে"
                  : status === "finished"
                    ? "সম্পূর্ণ সংবাদ পড়া শেষ হয়েছে"
                    : status === "error"
                      ? "অডিও পড়তে সমস্যা হয়েছে"
                      : voiceAvailable
                        ? "বাংলা ভয়েস পাওয়া গেছে"
                        : "ডিভাইসের উপলভ্য ভয়েস ব্যবহার করা হবে"}
            </p>
          </div>
        </div>

        {canStart && (
          <button
            type="button"
            onClick={() => startReading(true)}
            disabled={!fullText.trim()}
            className="inline-flex items-center gap-2 bg-sky-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-900 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === "finished" || status === "error" ? (
              <RotateCcw className="size-4" />
            ) : (
              <Play className="size-4" />
            )}

            {status === "finished" || status === "error"
              ? "আবার শুনুন"
              : "শুনুন"}
          </button>
        )}

        {status === "playing" && (
          <button
            type="button"
            onClick={pauseReading}
            className="inline-flex items-center gap-2 bg-amber-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-amber-700"
          >
            <Pause className="size-4" />
            বিরতি
          </button>
        )}

        {status === "paused" && (
          <button
            type="button"
            onClick={resumeReading}
            className="inline-flex items-center gap-2 bg-sky-800 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-900"
          >
            <Play className="size-4" />
            চালিয়ে যান
          </button>
        )}

        {isActive && (
          <button
            type="button"
            onClick={stopReading}
            className="inline-flex items-center gap-2 border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
          >
            <Square className="size-4" />
            বন্ধ
          </button>
        )}
      </div>

      {progress.total > 0 && (
        <div className="mt-3">
          <div
            className="h-1.5 w-full overflow-hidden bg-gray-200"
            role="progressbar"
            aria-label="সংবাদ পড়ার অগ্রগতি"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(percentage)}
          >
            <div
              className="h-full bg-sky-700 transition-all duration-300"
              style={{ width: `${percentage}%` }}
            />
          </div>

          <div className="mt-1 flex justify-between text-[11px] text-gray-500">
            <span>
              {progress.current} / {progress.total} অংশ
            </span>

            <span>{Math.round(percentage)}%</span>
          </div>
        </div>
      )}

      {status === "finished" && (
        <p className="mt-3 flex items-center gap-2 text-xs font-medium text-green-700">
          <CheckCircle2 className="size-4" />
          সম্পূর্ণ সংবাদ শোনা শেষ হয়েছে।
        </p>
      )}

      {message && (
        <p
          role="status"
          className="mt-3 flex items-start gap-2 text-xs leading-5 text-amber-800"
        >
          <AlertCircle className="mt-0.5 size-4 shrink-0" />
          {message}
        </p>
      )}
    </section>
  );
}
