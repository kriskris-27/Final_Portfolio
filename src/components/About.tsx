import { FlipWordsDemo } from "@/ui-comp/Flip";
import { TextHoverEffectDemo } from "@/ui-comp/TextHover";

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-black text-white px-6 py-10"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between">
        {/* Left column with the large About Me heading */}
        <div className="md:w-1/2">
          <h2 className="text-2xl md:text-[8rem] ">About Me</h2>
        </div>

        {/* Right column with the other content */}
        <div className="md:w-1/2 text-center mt-25">
          <p className="text-lg md:text-2xl leading-relaxed text-gray-300 mb-8">
            I'm Krishnakumar — a full-stack dev.
          </p>
          <FlipWordsDemo />
          <TextHoverEffectDemo />
          <p className="text-neutral-600 mt-4">hover ↑</p>
          <span className="text-lg md:text-xl text-gray-400">
            Tech I enjoy working with: React, Node.js, Express, MongoDB, and Tailwind.
            Also, I would love to explore...
          </span>
        </div>
      </div>
    </section>
  );
}

