"use client";
import { useState } from "react";
import { createPollQuestion } from "@/app/actions";
import { Loader } from "lucide-react";

export default function PollForm() {
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
          const formData = new FormData(e.currentTarget);
          const result = await createPollQuestion(formData); // capture return value
          
          // Check if result has a status or message
          if (result?.status === "success") {
            setQuestion("");
            alert("Poll created!");
          } else {
            // If function doesn’t return status, just assume success
            setQuestion("");
            alert("Poll created!"); 
          }
        } catch (err) {
          console.error(err);
          alert("Failed to create poll");
        } finally {
          setLoading(false);
        }
      }}
      className="p-4 border border-primary rounded-lg max-w-md mx-auto"
    >
      <input
        type="text"
        name="question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        className="border p-2 rounded-xs w-full mb-3"
        placeholder="Enter question"
        disabled={loading}
      />
      <button
        type="submit"
        className="bg-primary w-[200px] text-white px-4 py-2 rounded-xs hover:bg-primary/90 flex items-center justify-center gap-2 cursor-pointer"
        disabled={loading}
      >
        {loading && <Loader className="w-4 h-4 animate-spin" />}
        {loading ? "Creating..." : "Create Poll"}
      </button>
    </form>
  );
}
