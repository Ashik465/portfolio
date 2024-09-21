import { HiArrowDown,  } from "react-icons/hi2";
// import image from "../assets/me/me.png";
import image2 from "../assets/me/I.png";
import Typewriter from "typewriter-effect";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import SphereEffect from "../Sphere/Sphere";
import resume from '../assets/resume/Resume-of-Ashikul-Islam.pdf'



const Home = () => {


 
  return (
    <>
      <section className="mt-5 lg:mt-20 container mx-auto" id="header">
        <div className="grid grid-cols-1 md:grid-cols-2 w-10/12 mx-auto justify-center items-center">
          <div className="justify-self-center">
            <div className="text-left mb-3">
              <p className="md:text-4xl text-gray-500">Hello, I am 👋</p>
              <h1 className="md:text-4xl font-bold text-[#FFC107]">
                Md.Ashikul Islam
              </h1>
            </div>
            <div className="text-left text-red-300 underline underline-offset-8 decoration-[#c9f8e9] font-light md:text-3xl lg:mb-10">
              <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "MERN Stack Developer",
                    "Front-End Developer",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </div>
            <p className="text-lg text-gray-500">
              {" "}
              From Dhaka, Bangladesh. I specialize in React, Node.js, MongoDB,
              and Express. 🚀 Whether it is building responsive web applications
              or creating interactive interfaces, I thrive on turning ideas into
              elegant code. 🌟 Let us collaborate and bring your digital dreams
              to life!
            </p>
            <div className="flex items-center mt-2">
              <div className="grid grid-flow-col gap-4">
                <FaFacebook
                  onClick={() =>
                    window.open("https://www.facebook.com/Ashik9305/", "_blank")
                  }
                  className="fill-[#FFC107] btn-circle btn-outline p-2 border-0 hover:border-[#FFC107] border-dashed cursor-pointer hover:bg-transparent hover:border-2 active:animate-ping"
                ></FaFacebook>
              </div>
              <div className="grid grid-flow-col gap-4">
                <FaLinkedin
                  onClick={() =>
                    window.open(
                      "https://www.linkedin.com/in/md-ashikul-islam-07/",
                      "_blank"
                    )
                  }
                  className="fill-[#FFC107] btn-circle btn-outline p-2 border-0 hover:border-[#FFC107] border-dashed cursor-pointer hover:bg-transparent hover:border-2 active:animate-ping"
                ></FaLinkedin>
              </div>
              <div className="grid grid-flow-col gap-4">
                <FaGithub
                  onClick={() =>
                    window.open("https://github.com/Ashik465", "_blank")
                  }
                  className="fill-[#FFC107] btn-circle btn-outline p-2 border-0 hover:border-[#FFC107] border-dashed cursor-pointer hover:bg-transparent hover:border-2 active:animate-ping"
                ></FaGithub>
              </div>
            </div>
            
            {/* download */}
            <a
              href={resume}
              download="Resume-of-Ashikul-Islam"
              target="_blank"
              rel="noreferrer"
              className="mt-4 btn btn-outline border-2 hover:bg-[#FFC107] hover:border-[#FFC107] text-red-500"
            >
              Download Resume
              <HiArrowDown className="ml-2"></HiArrowDown>
            </a>
            {/*  */}
          </div>
          <div className="justify-self-center mask mask-circle">
            <img
              src={image2}
              alt="Person Image"
              className="relative z-10 h-[450px] pt-4"
            />
            <div className="absolute top-64 lg:top-0 lg:bottom-0">
              <SphereEffect />
            </div>
           
          </div>
        </div>
     
      </section>
    </>
  );
};

export default Home;
