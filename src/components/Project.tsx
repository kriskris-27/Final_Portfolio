import { motion } from "framer-motion";
import img1 from "../assets/image.webp";
import img2 from "../assets/image2.webp";
import img3 from "../assets/image4.webp";
import img4 from "../assets/image5.webp";

// Project Data
const projects = [
  {
    title: "Spitfire",
    image: img1,
    preview: "https://spitfire-tau.vercel.app/",
    descp: "Glow up your gains—track, log, and flex on 'em",
    techstack:
      "Tech Stack: React · Node.js · Express · MongoDB | Key Tools: MUI, Redux Toolkit, JWT, Styled Components",
  },
  {
    title: "Project 2",
    image: img2,
    preview: "#",
    descp: "Description for project 2",
    techstack: "Tech stack for project 2",
  },
  {
    title: "Project 3",
    image: img3,
    preview: "#",
    descp: "Description for project 3",
    techstack: "Tech stack for project 3",
  },
  {
    title: "Project 4",
    image: img4,
    preview: "#",
    descp: "Description for project 4",
    techstack: "Tech stack for project 4",
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
