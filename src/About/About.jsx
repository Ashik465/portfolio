import Lottie from 'lottie-react';
import laptopAnimation from '../assets/laptop.json'

const About = () => {
    return (
        <>
           <section id="about" className='w-10/12 container mx-auto'>
      <div className="triangle hidden lg:block"></div>
      <h1 className='text-center mt-20 lg:mt-36 font-bold text-xl lg:text-4xl text-[#FFC107] mb-10'>About Me</h1>
      <div className="card lg:card-side bg-[#ebf9f5]">
        <div className='h-96'>
          <Lottie animationData={laptopAnimation}></Lottie>
        </div>
        <div className="card-body lg:px-10 text-center lg:text-left">
          <p className='mb-3 font-mono font-bold text-gray-500'>As a recent graduate from Independent University with a Bachelor of Science in Computer Science and Engineering, I have developed a strong understanding of web development principles and techniques. I have been concentrating on improving my MERN stack skills over the last six months, working primarily with React, Tailwind CSS, Bootstrap, MongoDB, Express, Node js, and React Router, as well as Javascript and ES6. I have worked on a number of projects in this period that show I can design and make websites that are both responsive and user-friendly. The specifics of the projects are listed in my GitHub account as well as my resume and in my projects section in portfolio.</p>
          <p className='mb-3 font-mono font-bold text-gray-500'>In spite of my skills as an engineer, I also thrive in teamwork and communication. One of my primary skills is my problem-solving approach, which I have demonstrated in group projects at my institution. I like taking on difficult problems and coming up with creative answers. I am a quick learner who is constantly keen to increase my knowledge and keep up with the most recent developments in my field. I have no doubt that I can contribute to the success of your team because of my aptitude for adaptation and quick learning.</p>
          {/* <p className='mb-3 font-mono font-bold text-gray-500'>I possess a solid foundation in HTML, CSS, and JavaScript, and I am continuously expanding my knowledge and proficiency in React, one of the most popular front-end frameworks. I am excited to leverage Reacts powerful capabilities to build dynamic and responsive applications that leave a lasting impact on users.</p> */}
          {/* <p className='font-mono'>I have learned working with the power of Node.js to build robust and scalable back-end systems. Leveraging the Express framework, I have experience creating RESTful APIs and implementing various middleware functionalities. I also have a strong understanding of MongoDB, a popular NoSQL database, and its integration with Node.js to efficiently store and retrieve data.</p> */}
        </div>
      </div>




    </section>
        </>
    );
};

export default About;