import Spline from "@splinetool/react-spline";
import { Dock, DockIcon } from "../components/magicui/dock";
import {
  Home,
  User,
  Hammer,
  Code2,
  Phone,
//   ArrowDown,
//   Github,
//   Linkedin,
//   Instagram,
} from "lucide-react";
import { memo } from "react";

// Memoize the DockIcon component to prevent unnecessary re-renders
const MemoizedDockIcon = memo(DockIcon);

export default function Hero() {
  return (
    <>
      <section
        id="home"
        className="relative w-full min-h-screen bg-black overflow-hidden"
      >
        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            <div className="w-screen h-screen ">
  <Spline 
    scene="https://prod.spline.design/T9EAObpUV5XWRE-b/scene.splinecode" 
    className="w-full h-full" 
  />
</div>
            {/* <h1
              className="text-4xl md:text-6xl text-white drop-shadow-lg pb-6"
             
            >
              Hey, I'm <span className="text-white">Kris</span>
            </h1> */}
            
            {/* <h2
              className="text-xl md:text-2xl text-gray-300 mb-8"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              Full Stack Developer
            </h2> */}
            {/* <p
              className="text-md md:text-lg max-w-xl mx-auto text-gray-300 mb-12"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              I create immersive web experiences that blend robust backend
              solutions with engaging and modern user interfaces.
            </p> */}

            {/* CTA Buttons */}
            {/* <div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-white hover:bg-gray-300 rounded-lg transition-colors flex items-center justify-center gap-2 text-black"
              >
                View My Work
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black rounded-lg transition-colors"
              >
                Get In Touch
              </a>
            </div> */}

            {/* Social Links */}
            {/* <div
              className="flex justify-center gap-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <a
                href="https://github.com/kriskris-27"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors text-white"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors text-white"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors text-white"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div> */}
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <ArrowDown className="w-6 h-6 text-white" />
        </div> */}
      </section>
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
