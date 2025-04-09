

import { TextHoverEffectDemo } from "@/ui-comp/TextHover";



export default function About() {
    return (
      <section id="about" className="w-full min-h-screen flex items-center justify-center bg-black text-white px-6 py-20">
        
        <div className="max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-9">About Me</h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-300">
            I'm Krishnakumar — a full-stack developer passionate about building performant,
            scalable web applications from backend logic,building robust APIs to frontend flair.
            <br></br>
            <br></br>
            <span className="mt-4 text-md md:text-lg text-gray-400">
            Tech I enjoy working with: React, Node.js, Express, MongoDB and Tailwind.
            also i would love explore 
          </span>
          </p>
         
         <TextHoverEffectDemo/>
    
        </div>
      </section>
    );
  }
  
