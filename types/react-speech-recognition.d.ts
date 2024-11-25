declare module "react-speech-recognition" {

  interface SpeechRecognition {
    startListening: (options?: { continuous?: boolean; language?: string }) => void;
    stopListening: () => void;
    abortListening: () => void;
    browserSupportsSpeechRecognition: () => boolean;
    browserSupportsContinuousListening: () => boolean;
  }

  interface SpeechRecognitionOptions {
    transcript: string;
    listening: boolean;
    resetTranscript: () => void;
    interimTranscript: string;
    finalTranscript: string;
  }

  export const useSpeechRecognition: () => SpeechRecognitionOptions;

  const SpeechRecognition: SpeechRecognition;
  export default SpeechRecognition;
}
