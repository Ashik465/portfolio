import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import eliteSports from "../assets/projects/elite-sports-academy-53572.web.app.jpeg";
import Button from "../Button/Button";
import ButtonSecond from "../Button/ButtonSecond";

const Showcase1 = () => {
  return (
    <div className="hero mt-10">
      <div className="hero-content flex-col lg:gap-10 lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm">
          <div className="card-body">
            <h1 className="font-bold">EliteSports-Academy ⚽️</h1>
            <p className="py-6">
              ● This website has 3 types of role-based authorization admin can
              make a user instructor or admin <br />
              ● By default, every user is a
              student and can book sports classes and payments to get enrolled. <br />
              ● Features include a payment system, user sign-up, log-in, and
              private route. <br />
              <span className=" text-[#FFC107] font-bold">Technologies: </span>
               React, daisy-ui, Tailwind,
              React-router, JWT, Express, MongoDB, Firebase authentication,
              framer motion, Axios, Swiper,react-helmet, stripe/stripe-js
            </p>
           
            <div className="flex justify-between items-center">
              <div className="px-4 py-2 bg-[#3cb2f6] rounded-full shadow-2xl">
                <FaReact className="text-white" />
              </div>
              <div className="px-4 py-2 bg-[#96c84b] rounded-full ">
                <FaNodeJs />
              </div>
              <div className="px-4 py-2 bg-[#161616] rounded-full ">
                <SiMongodb className="text-green-600" />
              </div>
              <div className="px-4 py-2 bg-[#c6c6c6] rounded-full ">
                <SiExpress />
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <div
                onClick={() =>
                  window.open("https://elite-sports-academy-53572.web.app/", "_blank")
                }
              >
                <Button />
              </div>
              <div
                onClick={() =>
                  window.open(
                    "https://github.com/Ashik465/elite-sports-academy-client-React",
                    "_blank"
                  )
                }
              >
                <ButtonSecond />
              </div>
              <div
                onClick={() =>
                  window.open(
                    "https://github.com/Ashik465/elite-sports-academy-server-Express",
                    "_blank"
                  )
                }
              >

<ButtonSecond ></ButtonSecond>
                {/* <div className="flex flex-col">
                   <ButtonSecond ></ButtonSecond>
               <h1>server side</h1>  
                </div> */}
               
              </div>
            </div>
          </div>
        </div>
        <div className="card rounded-none flex-shrink-0 w-full bg-[#f7e8dd] max-w-sm h-96 overflow-y-scroll">
          <div className="card-body">
            <img src={eliteSports} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase1;
