import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = [
    "robust", "scalable", "interactive", "performant", "full-stack"
  ];

  return (
    <div className="flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        I Build <FlipWords words={words} /> <br />
        web apps end to end
      </div>
    </div>
  );
} 