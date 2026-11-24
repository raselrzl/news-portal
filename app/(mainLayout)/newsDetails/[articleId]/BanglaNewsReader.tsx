"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  Play,
  Pause,
  Square,
  Volume2,
  AlertCircle,
} from "lucide-react";

type BanglaNewsReaderProps = {
  heading?: string | null;
  details?: string | null;
};

type ReaderStatus = "idle" | "playing" | "paused" | "blocked" | "finished";

function decodeHtmlEntities(value: string): string {
  if (typeof document === "undefined") return value;

  const textarea = document.createElement("textarea");
  textarea.innerHTML = value;
  return textarea.value;
}

/**
 * Extract readable text from plain text, HTML, or serialized rich-text JSON.
 * Traverses all nested JSON values so editor-specific document structures
 * are not dependent on a particular "content" property.
 */
function extractReadableText(value?: string | null): string {
  if (!value) return "";

  const source = value.trim();
  if (!source) return "";

  // First try serialized editor JSON.
  try {
    const parsed: unknown = JSON.parse(source);

    const collect = (node: unknown): string => {
      if (node == null || typeof node === "boolean") return "";
      if (typeof node === "string") return node;
      if (typeof node === "number") return String(node);

      if (Array.isArray(node)) {
        return node.map(collect).filter(Boolean).join(" ");
      }

      if (typeof node === "object") {
        const record = node as Record<string, unknown>;

        // Rich-text nodes commonly store their actual text here.
        if (typeof record.text === "string") {
          return record.text;
        }

        // Only traverse likely document-content keys. This avoids reading
        // editor metadata, marks, IDs, URLs, and formatting attributes.
        const preferredKeys = [
          "content",
          "children",
          "blocks",
          "paragraphs",
          "items",
          "nodes",
        ];

        const values = preferredKeys
          .filter((key) => key in record)
          .map((key) => collect(record[key]))
          .filter(Boolean);

        if (values.length) return values.join(" ");

        // Handle simple JSON structures that use other nested keys.
        return Object.values(record)
          .map(collect)
          .filter(Boolean)
          .join(" ");
      }

      return "";
    };

    const jsonText = collect(parsed);
    if (jsonText.trim()) return normalizeText(jsonText);
  } catch {
    // Not JSON; continue with HTML/plain text.
  }

  // Convert HTML to visible text. DOMParser handles nested markup and entities.
  if (typeof window !== "undefined") {
    const parsedHtml = new DOMParser().parseFromString(source, "text/html");

    parsedHtml
      .querySelectorAll("script, style, noscript, iframe, svg")
      .forEach((element) => element.remove());

    const htmlText = parsedHtml.body.textContent || "";
    if (htmlText.trim()) return normalizeText(htmlText);
  }

  return normalizeText(decodeHtmlEntities(source.replace(/<[^>]*>/g, " ")));
}

function normalizeText(value: string): string {
  return value
    .replace(/\u00a0/g, " ")
    .replace(/[\t\r\n]+/g, " ")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([।!?.,;:])/g, "$1")
    .trim();
}

function splitIntoChunks(text: string, maxLength = 220): string[] {
  // Smaller chunks are more reliable across browsers and allow long articles
  // to continue sentence-by-sentence.
  const sentences = text.match(/[^।!?]+[।!?]?/g) ?? [text];
  const chunks: string[] = [];
  let current = "";

  for (const rawSentence of sentences) {
    const sentence = rawSentence.trim();
    if (!sentence) continue;

    if (sentence.length > maxLength) {
      if (current) {
        chunks.push(current);
        current = "";
      }

      for (let index = 0; index < sentence.length; index += maxLength) {
        chunks.push(sentence.slice(index, index + maxLength));
      }
      continue;
    }

    const next = current ? `${current} ${sentence}` : sentence;

    if (next.length > maxLength && current) {
      chunks.push(current);
      current = sentence;
    } else {
      current = next;
    }
  }

  if (current) chunks.push(current);
  return chunks;
}

function getBanglaVoice(): SpeechSynthesisVoice | undefined {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) {
    return undefined;
  }

  const voices = window.speechSynthesis.getVoices();

  return (
    voices.find((voice) => /^bn-BD$/i.test(voice.lang)) ||
    voices.find((voice) => /^bn([-_])/i.test(voice.lang))
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

  const chunksRef = useRef<string[]>([]);
  const currentChunkRef = useRef(0);
  const stoppedRef = useRef(true);
  const generationRef = useRef(0);
  const startedRef = useRef(false);

  const fullText = [
    heading ? `শিরোনাম। ${extractReadableText(heading)}` : "",
    details ? extractReadableText(details) : "",
  ]
    .filter(Boolean)
    .join("। ");

  const stopSpeech = useCallback((nextStatus: ReaderStatus = "idle") => {
    generationRef.current += 1;
    stoppedRef.current = true;

    if (
      typeof window !== "undefined" &&
      "speechSynthesis" in window
    ) {
      window.speechSynthesis.cancel();
    }

    currentChunkRef.current = 0;
    setStatus(nextStatus);
  }, []);

  const speakChunk = useCallback(
    (generation: number) => {
      if (
        stoppedRef.current ||
        generation !== generationRef.current
      ) {
        return;
      }

      if (currentChunkRef.current >= chunksRef.current.length) {
        stoppedRef.current = true;
        setStatus("finished");
        setMessage("সংবাদ পড়া শেষ হয়েছে।");
        return;
      }

      const chunk = chunksRef.current[currentChunkRef.current];
      const utterance = new SpeechSynthesisUtterance(chunk);

      // Ask the browser for a Bangla voice. The actual voice depends on
      // which Bangla voices are installed on the visitor's device.
      utterance.lang = "bn-BD";
      utterance.rate = 0.88;
      utterance.pitch = 1;
      utterance.volume = 1;

      const voice = getBanglaVoice();
      if (voice) utterance.voice = voice;

      utterance.onstart = () => {
        if (generation === generationRef.current) {
          setStatus("playing");
          setMessage("");
        }
      };

      utterance.onend = () => {
        if (
          stoppedRef.current ||
          generation !== generationRef.current
        ) {
          return;
        }

        currentChunkRef.current += 1;

        // A short gap helps some browsers reliably queue long articles.
        window.setTimeout(() => speakChunk(generation), 80);
      };

      utterance.onerror = (event) => {
        if (generation !== generationRef.current) return;

       if (event.error === "not-allowed") {
  stoppedRef.current = true;
  setStatus("blocked");
  setMessage(
    "ব্রাউজার স্বয়ংক্রিয় অডিও চালানো বন্ধ করেছে। শুনুন বাটনে চাপ দিয়ে শুরু করুন।"
  );
  return;
}

        if (event.error === "canceled" || event.error === "interrupted") {
          return;
        }

        stoppedRef.current = true;
        setStatus("idle");
        setMessage(
          "অডিও চালানো যায়নি। আবার শুনুন বাটনে চাপ দিন।"
        );
      };

      window.speechSynthesis.speak(utterance);
    },
    []
  );

  const startReading = useCallback(
    (fromBeginning = true) => {
      if (!supported || !("speechSynthesis" in window)) {
        setMessage("আপনার ব্রাউজারে টেক্সট-টু-স্পিচ সুবিধা নেই।");
        return;
      }

      if (!fullText.trim()) {
        setMessage("এই সংবাদে পড়ার মতো কোনো লেখা পাওয়া যায়নি।");
        return;
      }

      window.speechSynthesis.cancel();

      if (fromBeginning) {
        chunksRef.current = splitIntoChunks(fullText);
        currentChunkRef.current = 0;
      }

      if (!chunksRef.current.length) {
        setMessage("সংবাদের লেখা থেকে অডিও তৈরি করা যায়নি।");
        return;
      }

      stoppedRef.current = false;
      const generation = ++generationRef.current;
      setStatus("playing");
      setMessage("");

      // Some browsers need a short delay after cancel() before speak().
      window.setTimeout(() => speakChunk(generation), 120);
    },
    [fullText, speakChunk, supported]
  );

  const pauseReading = () => {
    if (!("speechSynthesis" in window)) return;
    window.speechSynthesis.pause();
    setStatus("paused");
  };

  const resumeReading = () => {
    if (!("speechSynthesis" in window)) return;

    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
      setStatus("playing");
      return;
    }

    // If the browser has no queued utterance, continue from current chunk.
    stoppedRef.current = false;
    const generation = ++generationRef.current;
    setStatus("playing");
    speakChunk(generation);
  };

  const stopReading = () => {
    stopSpeech("idle");
    setMessage("অডিও বন্ধ করা হয়েছে।");
  };

  // Attempt autoplay once when the article is ready.
  // Browsers may block audible autoplay until the visitor interacts.
  useEffect(() => {
    if (!supported || !fullText.trim() || startedRef.current) return;

    startedRef.current = true;

    const timer = window.setTimeout(() => {
      startReading(true);
    }, 900);

    return () => window.clearTimeout(timer);
  }, [fullText, startReading, supported]);

  // Load the available system voices.
  useEffect(() => {
    if (!("speechSynthesis" in window)) {
      setSupported(false);
      return;
    }

    const updateVoices = () => {
      setVoiceAvailable(Boolean(getBanglaVoice()));
    };

    updateVoices();
    window.speechSynthesis.addEventListener("voiceschanged", updateVoices);

    return () => {
      window.speechSynthesis.removeEventListener(
        "voiceschanged",
        updateVoices
      );
      window.speechSynthesis.cancel();
    };
  }, []);

  if (!supported) {
    return (
      <div className="mb-4 border border-amber-200 bg-amber-50 p-3 text-sm text-amber-800">
        আপনার ব্রাউজারে বাংলা সংবাদ শোনার সুবিধা সমর্থিত নয়।
      </div>
    );
  }

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
            <p className="text-xs text-gray-500">
              {status === "playing"
                ? "সংবাদ পড়া হচ্ছে..."
                : status === "paused"
                  ? "সংবাদ সাময়িকভাবে বন্ধ আছে"
                  : status === "finished"
                    ? "সংবাদ পড়া শেষ"
                    : voiceAvailable
                      ? "বাংলা ভয়েস পাওয়া গেছে"
                      : "ডিভাইসের উপলভ্য ভয়েস ব্যবহার করা হবে"}
            </p>
          </div>
        </div>

        {(status === "idle" ||
          status === "blocked" ||
          status === "finished") && (
          <button
            type="button"
            onClick={() => startReading(true)}
            className="inline-flex items-center gap-2 bg-sky-800 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-900"
          >
            <Play className="size-4" />
            আবার শুনুন
          </button>
        )}

        {status === "playing" && (
          <button
            type="button"
            onClick={pauseReading}
            className="inline-flex items-center gap-2 bg-amber-600 px-4 py-2 text-sm font-semibold text-white hover:bg-amber-700"
          >
            <Pause className="size-4" />
            বিরতি
          </button>
        )}

        {status === "paused" && (
          <button
            type="button"
            onClick={resumeReading}
            className="inline-flex items-center gap-2 bg-sky-800 px-4 py-2 text-sm font-semibold text-white hover:bg-sky-900"
          >
            <Play className="size-4" />
            চালিয়ে যান
          </button>
        )}

        {(status === "playing" || status === "paused") && (
          <button
            type="button"
            onClick={stopReading}
            className="inline-flex items-center gap-2 border border-gray-300 bg-white px-3 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100"
          >
            <Square className="size-4" />
            বন্ধ
          </button>
        )}
      </div>

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
