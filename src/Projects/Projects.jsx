import Showcase1 from "./Showcase1";
import Showcase2 from "./Showcase2";
import Showcase3 from "./Showcase3";
import Showcase4 from "./Showcase4";
import Showcase5 from "./Showcase5";

const Projects = () => {
  return (
    <section id="projects" className="w-10/12 mx-auto">
      <h1 className="text-center mt-20 font-bold text-xl lg:text-4xl text-[#FFC107]">
        Projects Showcase
      </h1>
      <Showcase1 />
      <Showcase2 />
      <Showcase3 />
      <Showcase4 />
      <Showcase5 />
    </section>
  );
};

export default Projects;
