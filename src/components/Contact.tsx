import React from "react";
import DecayCard from './ui/Decay';
import MyImage from "../assets/kris.jpg";

const Contact = () => {
  return (
    <section id="contact" className="relative min-h-screen bg-black overflow-hidden">
      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 py-10 sm:py-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Get in Touch
        </h2>
        <p className="text-lg text-white mb-8 max-w-2xl text-center">
          I’m always interested in new projects or collaborations. Use the options below to connect with me.
        </p>
           

<DecayCard width={200} height={300} image={MyImage}>
  <br/>KRIS
</DecayCard>
        {/* Additional Contact Links */}
        <div className="flex flex-wrap items-center gap-4 my-7">
          <a
            href="mailto:krishnakumars0101@gmail.com"
            className="px-5 py-2 border border-white rounded-full text-white hover:bg-white hover:text-black transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/krishnakumar-s-474b86257/"
            className="px-5 py-2 border border-white rounded-full text-white hover:bg-white hover:text-black transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/kriskris-27"
            className="px-5 py-2 border border-white rounded-full text-white hover:bg-white hover:text-black transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;