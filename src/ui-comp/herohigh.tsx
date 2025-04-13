"use client";
import { motion, useViewportScroll, useTransform } from "framer-motion";
import { HeroHighlight, Highlight } from "../components/ui/hero-highlight";

export function HeroHighlightDemo() {
  const { scrollY } = useViewportScroll();
  // When scrollY goes from 100 to 300, opacity moves from 0 to 1
  const opacity = useTransform(scrollY, [100, 300], [0, 1]);
  // When scrollY goes from 100 to 300, shift y from 20px to 0px
  const y = useTransform(scrollY, [100, 300], [20, 0]);

  return (
    <HeroHighlight>
      <motion.h1
        style={{
          opacity: opacity,
          y: y,
        }}
        initial={{
          opacity: 0,
          y: 20,
        }}
        transition={{
                      duration: 1, // increased duration for a slower effect
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-xl md:text-2xl lg:text-2xl font-bold text-neutral-700 dark:text-white max-w-2xl leading-relaxed lg:leading-snug text-center mx-auto"
      >
        <Highlight className="text-black dark:text-white">
          Authentic
        </Highlight>
      </motion.h1>
    </HeroHighlight>
  );
}
