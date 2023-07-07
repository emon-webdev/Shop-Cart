import React from "react";
import { Link } from "react-router-dom";
import head from '../../assets/Vector.png';
const Navbar = () => {
  return (
    <div className="header-area ">
      <div className="container md:py-[30px] py-[10px] border-b-[1px]">
        <nav className=''>
          <ul className='h-full  mx-auto flex justify-between items-center gap-3'>
            <h1 className="text-xl"><span className="font-bold">Shop</span>cart</h1>

            {/* <li className='flex bg-white mx-auto h-8 w-full max-w-lg  rounded-full pr-3'>
          <input
            className='h-8 rounded-full w-full text-sm border-0 focus:ring-0 outline-none'
            type='text'
            name='search'
            id='search'
          />
          <button>
            <BiSearchAlt />
          </button>
        </li>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/top-rated'>Top Rated</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/dashboard'>Dashboard</Link>
        </li>
        <Link to='/'>
          <li title='Wishlist' className='bg-indigo-500 p-2 rounded-full'>
            <IoIosListBox className='text-white' />
          </li>
        </Link> */}
            <Link to='/singin' className="flex items-center gap-2">
              <img src={head} alt="" srcset="" />
              <span className="text-base font-medium">Sign In</span>
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
