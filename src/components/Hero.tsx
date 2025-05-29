import Spline from "@splinetool/react-spline";
import { Dock, DockIcon } from "../components/magicui/dock";
import {
  Home,
  User,
  Hammer,
  Code2,
  Phone,
} from "lucide-react";
import { memo } from "react";

// Memoize the DockIcon component to prevent unnecessary re-renders
const MemoizedDockIcon = memo(DockIcon);

export default function Hero() {
  return (
    <>
      <div className="w-screen h-screen overflow-hidden">
  <div className="w-full h-full flex items-center justify-center transform scale-115">
    <Spline 
      scene="https://prod.spline.design/T9EAObpUV5XWRE-b/scene.splinecode" 
      className="w-full h-full"
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
