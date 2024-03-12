import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from 'react-scroll'
import { NAV } from "../data";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" flex sticky top-0  justify-between items-center h-24 w-full mx-auto bg-black mb-10 text-white">
      <h1 className="w-full text-3xl font-bold text-white m-4 ">
        Visibilidad <span className="text-[#00DF9A]">Web</span>
      </h1>
      <ul className="hidden  md:flex">
        {NAV.map((item,index)=>{
          return(
            <li
            className='cursor-pointer hover:text-[#00DF9A]'
            key={index} 
            >
            <Link  
       
      
            spy={true} smooth={true} offset={10}
            duration={500}
            to={item.path} className="p-4">{item.title}
            </Link>
            </li>
          )
        })}
       

      </ul>
      <div onClick={handleNav} className="cursor-pointer block md:hidden m-4">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      {/* SIDEBAR */}
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full  border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%] "
        }
      >
        <h1 className="w-full text-3xl font-bold text-white m-4 ">
        Visibilidad <span className="text-[#00DF9A]">Web</span>
        </h1>

        <ul className=" uppercase p-4">
          {NAV.map((item,index)=>{
          return(
            <li  
          
            key={index} 
             className="p-4 border-b border-gray-600 cursor-pointer  hover:text-[#00DF9A]">
            <Link  
              onClick={handleNav}
            spy={true} smooth={true} offset={10}
            duration={500}
            to={item.path} 
          
            >{item.title}</Link>
            </li>
          )
        })}
          
        </ul>


       



      </div>
    </div>
  );
};

export default Navbar;
