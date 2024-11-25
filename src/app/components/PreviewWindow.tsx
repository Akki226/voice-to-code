"use client";

import React from "react";

const PreviewWindow: React.FC<{ code: string | null }> = ({ code }) => {
  return (
    <div className="mt-6 border p-4 rounded">
      <p className="font-bold">Preview:</p>
      {code ? (
        <iframe
          title="Preview"
          srcDoc={code}
          style={{
            width: "100%",
            height: "300px",
            border: "1px solid #ddd",
          }}
        />
      ) : (
        <p className="text-gray-500">Generated code will appear here.</p>
      )}
    </div>
  );
};

export default PreviewWindow;
