import { ArrowDown, Github, Instagram, Linkedin } from 'lucide-react'

const old_hero = () => {
  return (
    <div><section
        id="home"
        className="relative w-full min-h-screen bg-black overflow-hidden"
      >
        


        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="max-w-4xl mx-auto">
            

            <h1
              className="text-4xl md:text-6xl text-white drop-shadow-lg pb-6"
             
            >
              Hey, I'm <span className="text-white">Kris</span>
            </h1> 
            
             <h2
              className="text-xl md:text-2xl text-gray-300 mb-8"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              Full Stack Developer
            </h2> 
            <p
              className="text-md md:text-lg max-w-xl mx-auto text-gray-300 mb-12"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              I create immersive web experiences that blend robust backend
              solutions with engaging and modern user interfaces.
            </p> 

            {/* CTA Buttons */}
             <div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-white hover:bg-gray-300 rounded-lg transition-colors flex items-center justify-center gap-2 text-black"
              >
                View My Work
                <ArrowDown className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-black rounded-lg transition-colors"
              >
                Get In Touch
              </a>
            </div> 

            {/* Social Links */}
             <div
              className="flex justify-center gap-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <a
                href="https://github.com/kriskris-27"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors text-white"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors text-white"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors text-white"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div> 
          </div>
        </div>

        {/* Scroll Indicator */}
         <div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <ArrowDown className="w-6 h-6 text-white" />
        </div> 
      </section></div>
  )
}

export default old_hero