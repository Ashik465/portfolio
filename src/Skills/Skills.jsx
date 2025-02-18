import Marquee from "react-fast-marquee";

const skills = [
  { name: "HTML", image: "/skills/html.svg" },
  { name: "CSS", image: "/skills/css.svg" },
  { name: "Tailwind", image: "/skills/tailwind.svg" },
  { name: "Bootstrap", image: "/skills/bootstrap.svg" },
  { name: "JavaScript", image: "/skills/javascript.svg" },
  { name: "React", image: "/skills/react.svg" },
  { name: "Next Js", image: "/skills/nextJS.svg" },
  { name: "Git", image: "/skills/git.svg" },
  { name: "MongoDB", image: "/skills/mongoDB.svg" },
  { name: "Node js", image: "/skills/node.png" },
  { name: "Figma", image: "/skills/figma.svg" },
  { name: "Firebase", image: "/skills/firebase.svg" },
];

const Skills = () => {
  return (
    <>
      <section id="skills" className="w-10/12 container mx-auto">
        <div className="triangle hidden lg:block"></div>
        <h1 className="text-center mt-20 lg:mt-36 font-bold text-xl lg:text-4xl text-[#FFC107] mb-10">
          Skills
        </h1>
        <Marquee
          gradient={false}
          speed={50}
          // pauseOnHover={true}
          // pauseOnClick={true}
          delay={0}
          play={true}
          direction="left"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="w-36 min-w-fit h-fit flex flex-col items-center gap-3 p-6 border border-gray-200 rounded-lg shadow-lg mx-3 "
            >
              <div className="h-8 sm:h-10">
                <img
                  src={skill.image}
                  alt={skill.name}
                  className=" h-full w-auto rounded-lg"
                />
              </div>
              <p className="text-center text-lg lg:text-2xl text-gray-700">
                {skill.name}
              </p>
              <div className="w-3/4">
                      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-zinc-300 to-transparent" />
                    </div>
            </div>
          ))}
        </Marquee>
      </section>
    </>
  );
};

export default Skills;
