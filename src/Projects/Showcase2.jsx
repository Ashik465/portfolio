import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import bigbear from "../assets/projects/toyhero-universe.web.app.jpeg";
import Button from "../Button/Button";
import ButtonSecond from "../Button/ButtonSecond";

const Showcase2 = () => {
  return (
    <div className="hero mt-10">
      <div className="hero-content flex-col lg:gap-10 lg:flex-row-reverse">
        <div className="card rounded-none flex-shrink-0 w-full bg-[#eaf7dd] max-w-sm">
          <div className="card-body h-96 overflow-y-scroll">
            <img src={bigbear} alt="" />
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm">
          <div className="card-body">
            <h1 className="font-bold">ToyHero-Universe 🦸‍♂️</h1>
            <p className="py-6">
              ● ToyHero-universe is a MERN stack single-page web application.{" "}
              <br />
              ● Implemented features include user sign-up, log-in, private
              route, and searching. <br />
              ● Users can add toys, update or delete the data, and view all
              toys. <br />
              <span className=" text-[#FFC107] font-bold">Technologies: </span>
              React, Tailwind, React-router, React Aos, Express, MongoDB,
              Firebase authentication.
            </p>

            <div className="flex justify-between items-center">
              <div className="px-4 py-2 bg-[#3cb2f6] rounded-full shadow-2xl">
                <FaReact className="text-white" />
              </div>
              <div className="px-4 py-2 bg-[#96c84b] rounded-full">
                <FaNodeJs />
              </div>
              <div className="px-4 py-2 bg-[#161616] rounded-full">
                <SiMongodb className="text-green-600" />
              </div>
              <div className="px-4 py-2 bg-[#c6c6c6] rounded-full">
                <SiExpress />
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div
                onClick={() =>
                  window.open("https://toyhero-universe.web.app/", "_blank")
                }
              >
                <Button />
              </div>
              <div
                onClick={() =>
                  window.open(
                    "https://github.com/Ashik465/toy-hero-universe-client-React",
                    "_blank"
                  )
                }
              >
                <ButtonSecond />
              </div>
              <div
                onClick={() =>
                  window.open(
                    "https://github.com/Ashik465/toy-hero-universe-server-Express",
                    "_blank"
                  )
                }
              >
                <ButtonSecond />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase2;
