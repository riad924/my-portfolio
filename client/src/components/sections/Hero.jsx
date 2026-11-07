import heroImage from "../../assets/images/hero-1.webp";
import Button from "../common/Button"

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-bg py-20 md:py-28"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 md:flex-row">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">

          <p className="mb-12 text-md font-bold leading-tight text-secondary md:text-xl">
            Hello, I'm{" "}
            <span className="text-">
              Riad Bhuiyan
            </span>
          </p>

          <h1 className="mb-8 text-5xl font-semibold text-primary">
            Full Stack Developer
          </h1>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center gap-4 md:justify-start">

          <Button href="#contact" className="text-white">
               Hire Me
          </Button>
    
            <a
              href="/cv/RiadCv2.pdf"
              download
              className="rounded-lg border border-purple-500 px-6 py-2 font-semibold text-purple-400 transition hover:bg-purple-600 hover:text-white"
            >
              Download CV
            </a>

          </div>

          {/* Social Links */}
          <div className="mt-8 flex justify-center gap-6 md:justify-start">

            <a
              href="https://github.com/riad924"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 transition hover:text-purple-400"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/riad-bhuiyan-5a5464331/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 transition hover:text-purple-400"
            >
              LinkedIn
            </a>

          </div>

        
          <div className="mt-6 flex flex-wrap gap-3">

            <div className="rounded-lg border border-gray-700 bg-gray-800/70 px-4 py-2.5">
               <h2 className="text-xl font-bold text-primary">01+</h2>
               <p className="text-xs text-gray-400">Experience</p>
            </div>

            <div className="rounded-lg border border-gray-700 bg-gray-800/70 px-4 py-2.5">
               <h2 className="text-xl font-bold text-primary">20+</h2>
               <p className="text-xs text-gray-400">Projects</p>
            </div>

            <div className="rounded-lg border border-gray-700 bg-gray-800/70 px-4 py-2.5">
               <h2 className="text-xl font-bold text-primary">10+</h2>
               <p className="text-xs text-gray-400">Happy Clients</p>
            </div>

          </div>


        </div>

        {/* Right Image */}
        <div className="flex flex-1 justify-center">

          <div className="relative h-72 w-72 md:h-96 md:w-96">

            <div className="absolute inset-0 rounded-full bg-purple-600 blur-3xl opacity-20"></div>

            <img
              src={heroImage}
              alt="Riad Bhuiyan - Frontend Developer"
              className="relative h-full w-full rounded-full border-4 border-purple-500 object-cover shadow-2xl"
            />

          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
