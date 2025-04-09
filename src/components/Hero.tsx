import Spline from "@splinetool/react-spline";

export default function Hero() {
  const scrollToProjects = () => {
    const el = document.getElementById("about");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
    <section className="relative w-full h-screen overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0 z-10">
        <Spline scene="https://prod.spline.design/YlNH63apvllb6ftS/scene.splinecode" />
      </div>
      
      <div className="absolute inset-x-0 bottom-80 z-0 flex flex-col items-center
  text-white text-center ">
        <h1 className="text-3xl  md:text-5xl font-bold drop-shadow-lg pb-14">Hey, I’m Kris</h1>
        <p className="text-md md:text-lg max-w-xl mx-auto drop-shadow-sm ">
          I create immersive web apps — blending robust logic with engaging UI.
        </p>
      </div>
    </section>
    <button
  onClick={scrollToProjects}
  className="fixed bottom-15 right-15 px-6 py-3 bg-white text-black font-semibold rounded-xl hover:scale-105 transition-all shadow-lg z-50"
>
  View Projects
</button>

   </>
  );
}
