import Spline from "@splinetool/react-spline";


import { Dock, DockIcon } from "../components/magicui/dock"
import {
    Home,
    User,
    Hammer,
    Code2,
    Layers,
    Phone,
    ScrollText,
  } from "lucide-react"

export default function Hero() {
  

  return (
    <>
    <section id="home" className="relative w-full min-h-screen overflow-hidden ">
      {/* Spline background */}
      <div className="absolute inset-0 z-10">
        <Spline scene="https://prod.spline.design/MBa6cURPsd720o3y/scene.splinecode"
 />
      </div>
      
      <div className="absolute inset-x-0 bottom-80 z-0 flex flex-col items-center
  text-white text-center ">
        <h1 className="text-3xl  md:text-5xl font-bold drop-shadow-lg pb-14">Hey, I’m Kris</h1>
        <p className="text-md md:text-lg max-w-xl mx-auto drop-shadow-sm ">
          I create immersive web apps — blending robust logic with engaging UI.
        </p>
      </div>
      
    </section>
    <div className="fixed bottom-5 right-5 px-1 py-1 font-semibold  rounded-xl hover:scale-105 transition-all shadow-lg z-50">
    <Dock>
  <DockIcon>
    <a href="#home" title="Home">
      <Home className="w-6 h-6 text-blue-100" />
    </a>
  </DockIcon>

  <DockIcon>
    <a href="#about" title="About">
      <User className="w-6 h-6 text-pink-100" />
    </a>
  </DockIcon>

  <DockIcon>
    <a href="#skills" title="Skills">
      <Hammer className="w-6 h-6 text-emerald-100" />
    </a>
  </DockIcon>

  <DockIcon>
    <a href="#projects" title="Projects">
      <Layers className="w-6 h-6 text-purple-100" />
    </a>
  </DockIcon>



  <DockIcon>
    <a href="#techstack" title="Tech Stack">
      <Code2 className="w-6 h-6 text-yellow-100" />
    </a>
  </DockIcon>

  <DockIcon>
    <a href="#resume" title="Resume">
      <ScrollText className="w-6 h-6 text-indigo-100" />
    </a>
  </DockIcon>

  <DockIcon>
    <a href="#contact" title="Contact">
      <Phone className="w-6 h-6 text-red-100" />
    </a>
  </DockIcon>
</Dock>

</div>
   </>
  );
}
