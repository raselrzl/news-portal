"use client";
import { useState, useEffect } from "react";
import { submitPollVote, getLatestPoll } from "@/app/actions";
import { Banana, ThumbsDown, ThumbsUp } from "lucide-react";
import LoadingSpinner from "../general/LoadingSpinner";

export default function LivePoll() {
  const [pollData, setPollData] = useState<any>(null);
  const [selected, setSelected] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadPoll = async () => {
      const data = await getLatestPoll();
      setPollData(data);
    };
    loadPoll();
  }, []);

  if (!pollData) return <LoadingSpinner />;

  const { poll, results } = pollData;

  if (!poll) {
    return (
      <div className="p-6 border rounded-lg max-w-md mx-auto text-center bg-white shadow">
        <h3 className="text-lg font-semibold mb-2 text-primary">
          দুঃখিত — কোন পোল নেই
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          এই মুহূর্তে কোনো পোল উপলব্ধ নেই। পরে আবার চেক করুন অথবা নতুন পোল তৈরি
          করুন।
        </p>
        <div className="text-xs text-muted-foreground">
          আপডেট পেতে আমাদের পেজ চেক করুন।
        </div>
      </div>
    );
  }

  const handleVote = async () => {
    if (!selected) return alert("অনুগ্রহ করে একটি উত্তর নির্বাচন করুন।");

    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("pollQuestionId", poll.id.toString());
      formData.append("answer", selected);

      await submitPollVote(formData);

      const data = await getLatestPoll();
      setPollData(data);
      setSelected("");
    } catch (error) {
      console.error("Error submitting vote:", error);
      alert("ভোট পাঠাতে ব্যর্থ হয়েছে। দয়া করে আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

  const totalVotes = results.YES + results.NO + results.NO_OPINION || 1;

  return (
    <div className="mx-auto  p-6 shadow-lg rounded-lg border bg-white">
      <h2 className="text-lg font-bold mb-4 text-left text-primary">
        🗳️ {poll.question}
      </h2>
      <div className="grid grid-cols-2">
        {/* Left side - Poll Question and Options */}
        <div className="col-span-2 md:col-span-1">
          <div className="space-y-3 mb-3 text-sm flex gap-2">
            {[
              { key: "YES", label: "হ্যাঁ" },
              { key: "NO", label: "না" },
              { key: "NO_OPINION", label: "মতামত নেই" },
            ].map((opt) => (
              <label
                key={opt.key}
                className="flex h-8 text-xs items-center bg-gray-100 rounded-xs px-3 py-1 cursor-pointer hover:bg-gray-200 transition"
              >
                <input
                  type="radio"
                  name="answer"
                  value={opt.key}
                  checked={selected === opt.key}
                  onChange={() => setSelected(opt.key)}
                  disabled={loading}
                  className="mr-3 w-3 h-3 accent-primary"
                />
                <span className="font-medium text-xs text-black">
                  {opt.label}
                </span>
              </label>
            ))}
          </div>

          <button
            onClick={handleVote}
            disabled={loading}
            className={`w-[130px] text-white px-4 py-1 rounded-xs bg-primary hover:bg-primary/90 transition cursor-pointer ${
              loading ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "ভোট হচ্ছে..." : "ভোট দিন"}
          </button>
        </div>

        {/* Right side - Live Results */}
        <div className="flex flex-col items-center justify-center col-span-2 md:col-span-1 md:pl-4 mt-2">
          <div className="space-y-2 w-full">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm">
                <ThumbsUp className="text-green-500 h-4" />
                <span>হ্যাঁ</span>
              </div>
              <span>{results.YES}</span>
            </div>
            <div className="w-full bg-gray-200 rounded h-2">
              <div
                className="bg-green-500 h-2 rounded"
                style={{ width: `${(results.YES / totalVotes) * 100}%` }}
              />
            </div>

            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-2 text-sm">
                <ThumbsDown className="text-red-500 h-4" />
                <span>না</span>
              </div>
              <span>{results.NO}</span>
            </div>
            <div className="w-full bg-gray-200 rounded h-2">
              <div
                className="bg-red-500 h-2 rounded"
                style={{ width: `${(results.NO / totalVotes) * 100}%` }}
              />
            </div>

            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-2 text-sm">
                <Banana className="text-yellow-500 h-4" />
                <span>মতামত নেই</span>
              </div>
              <span>{results.NO_OPINION}</span>
            </div>
            <div className="w-full bg-gray-200 rounded h-2">
              <div
                className="bg-yellow-400 h-2 rounded"
                style={{ width: `${(results.NO_OPINION / totalVotes) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
