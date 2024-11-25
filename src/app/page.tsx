// app/page.tsx
import MicButton from "./components/MicButton";
import FileTree from "./components/FileTree";

export default function Home() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold text-center">Voice-to-Code App</h1>
      <div className="flex gap-8">
        <div className="flex-1 space-y-4">
          <MicButton />
        </div>
        <div className="flex-1">
          <FileTree />
        </div>
      </div>
    </div>
  );
}
