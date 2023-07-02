import { FaNodeJs, FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb } from "react-icons/si";
import chefRecipe from "../assets/projects/chef-recipe-7d3d4.web.app.jpeg";
import Button from "../Button/Button";
import ButtonSecond from "../Button/ButtonSecond";

const Showcase1 = () => {
  return (
    <div className="hero mt-10">
      <div className="hero-content flex-col lg:gap-10 lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm">
          <div className="card-body">
           
            <h1 className="font-bold">Chefs table 👨‍🍳</h1>
            <p className="py-6">
            ● Users can browse through various types of recipes from different chefs.
 <br />
 ● Implemented features include user sign-up, log-in, and private route.
 <br />
 ● Logged-in users can access the details of each chef.
 <br />
              <span className=" text-[#FFC107] font-bold">Technologies: </span>
              Tailwind, React-router, Express, MongoDB, Firebase authentication
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
                  window.open("https://chef-recipe-7d3d4.web.app/", "_blank")
                }
              >
                <Button />
              </div>
              <div
                onClick={() =>
                  window.open(
                    "https://github.com/Ashik465/chef-table-client-React",
                    "_blank"
                  )
                }
              >
                <ButtonSecond />
              </div>
              <div
                onClick={() =>
                  window.open(
                    "https://github.com/Ashik465/chef-table-server-Express",
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
            <img src={chefRecipe} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase1;
