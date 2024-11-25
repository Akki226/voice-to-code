"use client";

import "regenerator-runtime/runtime";
import React, { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import CodeGenerator from "./CodeGenerator";
import PreviewWindow from "./PreviewWindow";
import CodeEditor from "./CodeEditor";

const MicButton: React.FC = () => {
  const { transcript, listening, resetTranscript } = useSpeechRecognition();
  const [generatedCode, setGeneratedCode] = useState<string | null>(null);

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true });
  const stopListening = () => SpeechRecognition.stopListening();

  return (
    <div className="flex flex-col items-center">
      <div className="mt-4">
        {listening ? (
          <button
            onClick={stopListening}
            className="bg-red-500 text-white px-4 py-2 rounded"
          >
            Stop
          </button>
        ) : (
          <button
            onClick={startListening}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Start
          </button>
        )}
        <button
          onClick={resetTranscript}
          className="ml-2 px-4 py-2 bg-gray-500 text-white rounded"
        >
          Reset
        </button>
      </div>

      <div className="mt-6 p-4 border rounded w-full">
        <p className="font-bold text-black">Transcription:</p>
        <p className="text-black">
          {transcript || "Speak into the microphone..."}
        </p>
      </div>

      {/* Code Generator */}
      <CodeGenerator
        transcript={transcript}
        setGeneratedCode={setGeneratedCode}
      />
      <PreviewWindow code={generatedCode} />
      <CodeEditor code={generatedCode} onCodeChange={setGeneratedCode} />
    </div>
  );
};

export default MicButton;
