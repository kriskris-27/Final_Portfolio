import Spline from "@splinetool/react-spline";

// import { Dock, DockIcon } from "../components/magicui/dock"
// import {
//     Home,
//     Menu,
//     Search,
//     Compass,
//     Map,
//     LocateFixed,
//     ChevronLeft,
//     ChevronRight,
//   } from "lucide-react";

export default function Hero() {
//   const scrollToProjects = () => {
//     const el = document.getElementById("about");
//     if (el) {
//       el.scrollIntoView({ behavior: "smooth" });
//     }
//   };

  return (
    <>
    <section className="relative w-full h-screen overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0 z-10">
        <Spline scene="https://prod.spline.design/YlNH63apvllb6ftS/scene.splinecode"
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
    <div className="fixed bottom-5 right-5 px-1 py-1 font-semibold bg-red-50 rounded-xl hover:scale-105 transition-all shadow-lg z-50">
</div>
   </>
  );
}
