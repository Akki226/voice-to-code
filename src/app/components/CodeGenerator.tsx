"use client";

import React, { useState } from "react";

const CodeGenerator: React.FC<{
  transcript: string;
  setGeneratedCode: (code: string | null) => void;
}> = ({ transcript, setGeneratedCode }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateCode = async () => {
    if (!transcript) {
      setError("Transcript is empty. Please provide input.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/openai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ transcript }),
      });

      const data = await response.json();

      if (response.ok) {
        setGeneratedCode(data.code);
      } else {
        setError(data.error || "An error occurred while generating code.");
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Failed to connect to the server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6 w-full">
      <button
        onClick={generateCode}
        className="p-3 bg-blue-500 text-white rounded"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Code"}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default CodeGenerator;
