import { lazy, Suspense } from "react";
import Hero from "./components/Hero";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import { HeroHighlightDemo } from "./ui-comp/herohigh";

// Lazy load heavy components
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Project"));
const Contact = lazy(() => import("./components/Contact"));

function App() {
  return (
    <>
      <Hero />
      
      <HeroHighlightDemo />
      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>
    </>
  );
}

export default App;
