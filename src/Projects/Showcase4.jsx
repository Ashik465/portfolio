import {  FaReact } from 'react-icons/fa';
import {  SiTailwindcss } from 'react-icons/si';
import bigbear from '../assets/projects/nft marketplace.app.jpeg'
import Button from '../Button/Button';
import ButtonSecond from '../Button/ButtonSecond';

const Showcase4 = () => {
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
                    <h1 className="font-bold">NFT-Market-place </h1>
                    <p className="py-6">● NFT-Market-place is a MERN stack single-page web application. <br />
● This is just a single landing page front-end focus <br />
● Made of React and tailwind, React count up and swipper js <br />

<span className=" text-[#FFC107] font-bold">Technologies: </span>
React, Tailwind, Swipper js ,React count up 

</p>
                    
                    <div className='flex  space-x-5 items-center'>
                        <div className='px-4 py-2 bg-[#3cb2f6] rounded-full shadow-2xl'><FaReact className='text-white' /></div>
                      
                        <div className='px-4 py-2 bg-[#161616] rounded-full'><SiTailwindcss className='text-green-600' /></div>
                      
                    </div>
                    <div className='mt-2 flex items-center space-x-5'>
                        <div onClick={() => window.open('https://zippy-crumble-b93ee9.netlify.app/', '_blank')}>
                            <Button />
                        </div>
                        <div onClick={() => window.open('https://github.com/Ashik465/nft-market-place-community', '_blank')}>
                            <ButtonSecond />
                        </div>
                   
                    </div>
                </div>
            </div>

        </div>
    </div>
    );
};

export default Showcase4;