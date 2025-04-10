import { motion } from "framer-motion";
import { FlipWordsDemo } from "@/ui-comp/Flip";
import { TextHoverEffectDemo } from "@/ui-comp/TextHover";

export default function About() {
  return (
    <motion.section
      id="about"
      className="w-full min-h-screen bg-black text-white px-4 md:px-12 py-16"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Left: Big heading */}
        <motion.div
  className="md:w-1/3"
  initial={{ opacity: 0, x: -30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
  viewport={{ once: true }}
>
  <h2 className="text-3xl md:text-[6rem] lg:text-[8rem] leading-tight ">About Me</h2>
</motion.div>

{/* Right: Description and effects */}
<motion.div
  className="md:w-2/3 text-center md:text-left space-y-6 flex flex-col"
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
  viewport={{ once: true }}
>
  <p className="text-lg md:text-2xl text-center text-gray-300 leading-relaxed pt">
    I'm Krishnakumar — a full-stack dev.
  </p>

  <div className="py-2">
    <FlipWordsDemo />
  </div>
  <p className="text-red-200 text-sm text-center p-0 m-0">hover ↓</p>

  <div className="py-2">
    <TextHoverEffectDemo />
  </div>

  

  <span className="block  text-lg md:text-xl text-gray-400">
    Tech I enjoy working with: React, Node.js, Express, MongoDB, and Tailwind. <br />
    Also, I would love to explore...
  </span>
</motion.div>

      </div>
    </motion.section>
  );
}
