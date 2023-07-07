import React from 'react';
import heroImg from '../assets/heroImg.png';

const HeroArea = () => {
    return (
        <div>
            <div className="hero_area py-8"
            // style={{ backgroundImage: `url(${herobg})` }}
            >
                <div className="container">
                    <div className="hero_wrap flex items-center md:gap-20 md:h-[760px]">
                        <div className="md:max-w-[545px] w-full">
                            <h1 className="md:text-6xl text-4xl font-bold leading-tight mb-5 text-black">We picked some <span className='text-[#FFAE5D]'>cool things</span> for you!</h1>
                        </div>
                        <div className="md:max-w-[545px] w-full">
                            <img className='mx-w-[800px]' src={heroImg} alt="car" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroArea;