import { motion } from "framer-motion";
import img1 from "../assets/image.webp";
import img2 from "../assets/image2.webp";
import img3 from "../assets/image4.webp";
import img4 from "../assets/image5.webp";

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
      preview: "https://software-sandy.vercel.app/",
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

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl  text-center text-white mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.descp}</p>
                <p className="text-sm text-gray-500 mb-4">{project.techstack}</p>
                <a
                  href={project.preview}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
