import Spline from "@splinetool/react-spline";
import { Dock, DockIcon } from "../components/magicui/dock";
import {
  Home,
  User,
  Hammer,
  Code2,
  Phone,
} from "lucide-react";
import { memo, useState } from "react";
import { motion } from "framer-motion";

//prevent unnecessary re-renders

const MemoizedDockIcon = memo(DockIcon);

const LoadingAnimation = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative w-32 h-32">
        {/* Outer ring */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-white/30"
          animate={{
            borderColor: ["rgba(255,255,255,0.3)", "rgba(255,255,255,0.8)", "rgba(255,255,255,0.3)"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        {/* Inner ring */}
        <motion.div
          className="absolute inset-4 rounded-full border-2 border-white/30"
          animate={{
            borderColor: ["rgba(255,255,255,0.8)", "rgba(255,255,255,0.3)", "rgba(255,255,255,0.8)"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        {/* Center dot */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
        </motion.div>
      </div>
      {/* Loading text */}
      <motion.div
        className="text-white text-xl font-semibold tracking-wider"
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Loading Experience
      </motion.div>
    </div>
  );
};

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);

  const handleSplineLoad = () => {
    setIsLoading(false);
  };

  return (
    <>
      <div className="w-screen h-screen overflow-hidden relative" id="home">
        {isLoading && (
          <motion.div 
            className="absolute inset-0 flex items-center justify-center bg-black z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <LoadingAnimation />
          </motion.div>
        )}
        <div className="w-full h-full flex items-center justify-center transform scale-115">
          <Spline 
            scene="https://prod.spline.design/T9EAObpUV5XWRE-b/scene.splinecode" 
            className="w-full h-full"
            onLoad={handleSplineLoad}
          />
        </div>
      </div>

      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col items-center pr-2 space-y-1 ">
        { "NWOD LLORCS".split("").map((char, index) => (
          <span key={index} className="transform rotate-270 text-white text-xs font-bold md:text-md xl:text-xl">
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
      {/* Floating Navigation Dock */}
      <div
        className="fixed bottom-5 right-5 px-1 py-1 font-semibold rounded-xl hover:scale-105 transition-all shadow-lg z-50"
        data-aos="fade-left"
        data-aos-delay="800"
      >
        <Dock>
          <MemoizedDockIcon>
            <a href="#home" title="Home">
              <Home className="w-6 h-6 text-white" />
            </a>
          </MemoizedDockIcon>
          <MemoizedDockIcon>
            <a href="#about" title="About">
              <User className="w-6 h-6 text-white" />
            </a>
          </MemoizedDockIcon>
          <MemoizedDockIcon>
            <a href="#skills" title="Skills">
              <Hammer className="w-6 h-6 text-white" />
            </a>
          </MemoizedDockIcon>
          <MemoizedDockIcon>
            <a href="#projects" title="Projects">
              <Code2 className="w-6 h-6 text-white" />
            </a>
          </MemoizedDockIcon>
          
          <MemoizedDockIcon>
            <a href="#contact" title="Contact">
              <Phone className="w-6 h-6 text-white" />
            </a>
          </MemoizedDockIcon>
        </Dock>
      </div>

         

    </>
  );
}
