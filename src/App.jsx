import { BrowserRouter as Router } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Home from "./Home/Home";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
// import { HiRocketLaunch } from "react-icons/hi2";

function App() {
  return (
    <>
      <Router>
        <nav className="w-10/12 mx-auto container sticky z-50 top-0">
          <div className="navbar bg-base-100 bg-opacity-10 backdrop-blur-sm">
            <div className="navbar-start">
              <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-[#18C08B]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="3"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                <ul
                  tabIndex={0}
                  className="menu menu-compact dropdown-content shadow bg-base-100 rounded-box w-40"
                >
                  <li>
                    <Link smooth to="/#header">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link smooth to="/#about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link smooth to="/#projects">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link smooth to="/#contact">
                      Contact Me
                    </Link>
                  </li>
                </ul>
              </div>
              <Link to="/" className="">
                <div>
                  <h1 className="text-5xl font-signature md:ml-2">Ashik</h1>
                </div>
              </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <Link
                    smooth
                    to="/#header"
                    className="focus:text-[#18C08B] hover:bg-transparent font-mono font-bold text-gray-500"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    smooth
                    to="/#about"
                    className="focus:text-[#18C08B] hover:bg-transparent font-mono font-bold text-gray-500"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    smooth
                    to="/#projects"
                    className="focus:text-[#18C08B] hover:bg-transparent font-mono font-bold text-gray-500"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    smooth
                    to="/#contact"
                    className="focus:text-[#18C08B] hover:bg-transparent font-mono font-bold text-gray-500"
                  >
                    Contact Me
                  </Link>
                </li>
              </ul>
            </div>
            <div className="navbar-end ">
              {/* <Link
                to="/#contact"
                className="btn btn-outline border-2 hover:bg-[#70DCBA] hover:border-[#70DCBA] text-[#18C08B]"
              >
                Hire me
                <HiRocketLaunch className="ml-2"></HiRocketLaunch>
              </Link> */}
              {/* custom button  */}
              <Link
                to="/#contact"
                className="relative inline-block text-base md:text-lg group"
              >
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative">Hire me</span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </Link>
            </div>
          </div>
        </nav>
        <div
          style={{ scrollBehavior: "smooth", scrollSnapType: "y mendatory" }}
        >
          <Home />
        </div>
        <div
          style={{ scrollBehavior: "smooth", scrollSnapType: "y mendatory" }}
        >
          <About />
        </div>
        <div
          style={{ scrollBehavior: "smooth", scrollSnapType: "y mendatory" }}
        >
          <Projects />
        </div>
        <div
          style={{ scrollBehavior: "smooth", scrollSnapType: "y mendatory" }}
        >
          <Contact />
        </div>

        <Footer />
      </Router>
    </>
  );
}

export default App;
