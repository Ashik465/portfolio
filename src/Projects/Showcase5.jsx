import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import drivewave from "../assets/projects/drivewave vercel app.png";
import Button from "../Button/Button";
import ButtonSecond from "../Button/ButtonSecond";

const Showcase5 = () => {
  return (
    <div className="hero mt-10">
      <div className="hero-content flex-col lg:gap-10 lg:flex-row-reverse">
        <div className="card flex-shrink-0 w-full max-w-sm">
          <div className="card-body">
            <h1 className="font-bold">Drive-wave</h1>
            <p className="py-6">
              ● In the Drive-wave a users can browse through various types of Cars 
              and see the details of each car.
              <br />
              ● Implemented features include user sign-up, log-in, and search
              filter.
              <br />
              ● Logged-in users can love and save the favorite car.
              <br />
              <span className="text-[#FFC107] font-bold">Technologies: </span>
              Next.js, Tailwind, local storage authentication
            </p>

            <div className="flex gap-3 items-center">
              <div className="px-4 py-2 bg-white text-black rounded-full">
                <SiNextdotjs />
              </div>
              <div className="px-4 py-2 bg-[#3cb2f6] rounded-full shadow-2xl">
                <FaReact className="text-white" />
              </div>
            </div>
            <div className="mt-2 flex gap-5 items-center">
              <div
                onClick={() =>
                  window.open("https://drivewave.vercel.app/", "_blank")
                }
              >
                <Button />
              </div>
              <div
                onClick={() =>
                  window.open(
                    "https://github.com/Ashik465/Drive-Wave",
                    "_blank"
                  )
                }
              >
                <ButtonSecond />
              </div>
            </div>
          </div>
        </div>
        <div className="card rounded-none flex-shrink-0 w-full bg-[#f7e8dd] max-w-sm h-96 overflow-y-scroll">
          <div className="card-body">
            <img src={drivewave} alt="Drive-wave project screenshot" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase5;
