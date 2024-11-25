"use client";

import React, { useState, useEffect } from "react";
import MonacoEditor from "@monaco-editor/react";

const CodeEditor: React.FC<{
  code: string | null;
  onCodeChange: (newCode: string) => void;
}> = ({ code, onCodeChange }) => {
  const [currentCode, setCurrentCode] = useState(code || "");

  useEffect(() => {
    if (code) {
      setCurrentCode(code); // Sync with new generated code
    }
  }, [code]);

  const handleEditorChange = (value: string | undefined) => {
    const updatedCode = value || "";
    setCurrentCode(updatedCode);
    onCodeChange(updatedCode);
  };

  return (
    <div className="mt-6 border p-4 rounded">
      <p className="font-bold">Code Editor:</p>
      <MonacoEditor
        height="400px"
        width="400px"
        defaultLanguage="html"
        value={currentCode}
        onChange={handleEditorChange}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
        }}
      />
    </div>
  );
};

export default CodeEditor;
