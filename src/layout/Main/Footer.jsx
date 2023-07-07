import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bg-[#404040] md:py-[30px] py-[10px] border-b-[1px]'>
            <div className="container">
                <div className='flex justify-between items-center gap-3'>
                    <h1 className="text-xl text-white"><span className="font-bold">Shop</span>cart</h1>

                    <ul className='flex items-center gap-4'>
                        <li className='text-white'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='text-white'>
                            <Link to='/top-rated'>Top Rated</Link>
                        </li>
                        <li className='text-white'>
                            <Link to='/about'>About</Link>
                        </li>
                        <li className='text-white'>
                            <Link to='/dashboard'>Dashboard</Link>
                        </li>
                    </ul>

                    <div>
                        <select className="select w-full max-w-xs bg-[#404040] text-white">
                            <option>English</option>
                            <option>English 1</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;