import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white">
      <h1 className="w-full text-3xl font-bold text-white m-4 ">
        Visibilidad <span className="text-[#00DF9A]">Web</span>
      </h1>
      <ul className="hidden  md:flex">
        <li className="p-4">Inicio</li>
        <li className="p-4">Trabajos</li>
        <li className="p-4">Nosotros</li>
        <li className="p-4">Contacto</li>

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
          <li className="p-4 border-b border-gray-600 ">Inicio</li>
          <li className="p-4 border-b border-gray-600 ">Trabajos</li>
          <li className="p-4 border-b border-gray-600 ">Nosotros</li>
          <li className="p-4 border-b border-gray-600 ">Contacto</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
