import { motion } from "framer-motion";
import { lazy, Suspense } from "react";

import img1 from "../assets/image.webp";
import img2 from "../assets/image2.webp";
import img3 from "../assets/image4.webp";
import img4 from "../assets/image5.webp";

// Lazy load Spline
const LazySpline = lazy(() => import("@splinetool/react-spline"));

// Project Data
const projects = [
  {
    title: "Starlietti – EV Charger Finder",
    image: img2,
    preview: "https://starlietti-ui.vercel.app/",
    descp: "Find the closest EV charging spots in seconds",
    techstack:
      "Tech Stack: React · Node.js · Express · MongoDB · Vite | Key Tools: Leaflet, JWT, Haversine, Axios",
  },
  {
    title: "Bill Vision - A Retail POS",
    image: img4,
    preview: "https://software-gold.vercel.app/",
    descp: "A smart and user-friendly Retail POS System built for small businesses.",
    techstack:
      "Tech Stack: React · Node.js · Express · MongoDB · TypeScript | Key Tools: React Query, JWT, Tailwind, PDFKit",
  },
  {
    title: "Spitfire – Fitness Tracker",
    image: img1,
    preview: "https://spitfire-tau.vercel.app/",
    descp: "Glow up your gains—track, log, and flex on ‘em",
    techstack:
      "Tech Stack: React · Node.js · Express · MongoDB | Key Tools: MUI, Redux Toolkit, JWT, Styled Components",
  },
  {
    title: "Tribe - Cafe (Freelance)",
    image: img3,
    preview: "https://tribe-by-v.vercel.app/",
    descp: "A vibrant fusion drink brand website with a tribal aesthetic.",
    techstack:
      "Tech Stack: React · Three.js · Tailwind CSS · Vite · JavaScript | Tools: R3F, Framer Motion, GSAP, @shadcn/ui",
  },
];

const letterAnimation = {
  hidden: { opacity: 0, y: -5 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.03, duration: 0.08 },
  }),
};

const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4 text-white min-h-screen">
      {/* Title */}
      <h2 className="text-2xl py-8 text-white md:text-[8rem] ">Projects</h2>

      {/* Project List */}
      <div className="flex flex-col items-center gap-20">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="flex flex-col md:flex-row md:items-center gap-8 max-w-5xl w-full px-4 md:px-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            {/* Image */}
            <div className="w-full md:w-80 h-48 flex-shrink-0 overflow-hidden rounded-xl shadow-lg shadow-gray-500 hover:shadow-white transition duration-300 transform hover:scale-105">
              <a href={project.preview} target="_blank" rel="noopener noreferrer">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </a>
            </div>

            {/* Text */}
            <div className="flex flex-col justify-center text-left gap-2">
              <h3 className="text-2xl font-semibold">{project.title}</h3>

              <motion.p className="text-gray-300 text-lg leading-relaxed mb-1">
                {project.descp.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.p>

              <motion.p className="text-white text-sm leading-relaxed">
                {project.techstack.split("").map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterAnimation}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lazy Loaded Spline */}
      <div className="mt-24">
        <Suspense
          fallback={
            <div className="w-full h-96 bg-gray-900 rounded-xl animate-pulse" />
          }
        >
          <LazySpline scene="https://prod.spline.design/JeCjdeCJ3j2ZTCHN/scene.splinecode" />
        </Suspense>
      </div>
    </section>
  );
};

export default Projects;
