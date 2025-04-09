import { motion } from "framer-motion";
import img1 from "../assets/image.png"
import img2 from "../assets/image2.png"
import img3 from "../assets/image4.png"
import img4 from "../assets/image5.png"
// Placeholder TypingEffect component.
// Replace this with your actual TypingEffect component.


const projects = [
  {
    title: "Starlietti – EV Charger Finder",
    image: img2,
    preview: "https://starlietti-ui.vercel.app/",
    descp: "Find the closest EV charging spots in seconds",
    techstack: "Tech Stack: React · Node.js · Express · MongoDB · Vite | Key Tools: Leaflet, JWT, Haversine, Axios",
  },
  {
    title: "Bill Vision - A Retail POS",
    image:img4,
    preview: "https://software-gold.vercel.app/",
    descp: "A smart and user-friendly Retail POS System built for small businesses.",
    techstack: "Tech Stack: React · Node.js · Express · MongoDB · TypeScript | Key Tools: React Query, JWT, Tailwind, PDFKit",
  },
  {
    title: "Spitfire – Fitness Tracker",
    image:img1,
    preview: "https://spitfire-tau.vercel.app/",
    descp: "Glow up your gains—track, log, and flex on ‘em",
    techstack: "Tech Stack: React · Node.js · Express · MongoDB | Key Tools: MUI, Redux Toolkit, JWT, Styled Components",
  },
  {
    title: "Tribe - Cafe (Freelance)",
    image: img3,
    preview: "https://tribe-by-v.vercel.app/",
    descp: "A vibrant fusion drink brand website with a tribal aesthetic.",
    techstack: "Tech Stack: React · Three.js · Tailwind CSS · Vite · JavaScript | Tools: R3F, Framer Motion, GSAP, @shadcn/ui",
  },
];

// Letter-by-letter animation for project descriptions.
const letterAnimation = {
  hidden: { opacity: 0, y: -5 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.1 },
  }),
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 px-4 text-white min-h-screen"
    >
      {/* Title */}
      <h2 className="text-2xl py-8 ml-25 text-white md:text-[8rem] ">Projects</h2>

      {/* Projects List */}
      <div className="flex flex-col sm:flex-row">
        
        <div className="flex flex-col items-start gap-16 px-10 sm:pl-20 md:pl-30">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-start md:flex-row md:items-center gap-8 w-full max-w-3xl"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Clickable Image */}
              <div className="w-full sm:w-80 h-40 sm:h-48 flex-shrink-0">
                <a href={project.preview} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-xl shadow-lg shadow-gray-500 hover:shadow-white transition duration-300"
                  />
                </a>
              </div>

              {/* Project Title & Description */}
              <div className="flex flex-col justify-center text-left">
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <motion.p className="text-gray-300 text-lg leading-relaxed mb-2">
                  {project.descp.split("").map((char, i) => (
                    <motion.span key={i} custom={i} variants={letterAnimation} initial="hidden" animate="visible">
                      {char}
                    </motion.span>
                  ))}
                </motion.p>
                <motion.p className="text-white text-md leading-relaxed">
                  {project.techstack.split("").map((char, i) => (
                    <motion.span key={i} custom={i} variants={letterAnimation} initial="hidden" animate="visible">
                      {char}
                    </motion.span>
                  ))}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;