import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
  const customScroll = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -70; // Adjust this value to scroll 10px before the element
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  };

    return (
        <div>
            <footer className="footer footer-center p-10  text-base-content rounded">
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
                <div className="grid grid-flow-col gap-4 list-none">
                    <li><Link scroll={customScroll}  smooth to="/#header" className='focus:text-[#18C08B] hover:underline'>Home</Link></li>
                    <li><Link scroll={customScroll} smooth to="/#about" className='focus:text-[#18C08B] hover:underline'>About</Link></li>
                    <li><Link scroll={customScroll} smooth to="/#projects" className='focus:text-[#18C08B] hover:underline'>Projects</Link></li>
                    <li><Link scroll={customScroll} smooth to="/#contact" className='focus:text-[#18C08B] hover:underline'>Contact Me</Link></li>
                </div>
            </footer>
        </div>
    );
};

export default Footer;