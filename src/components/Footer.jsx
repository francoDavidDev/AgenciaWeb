import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaWhatsapp
} from "react-icons/fa";

import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div
      id="contacto"
      className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-4 text-gray-300"
    >
      <div>
        <h1 className="w-full text-3xl font-bold text-white">
          VISIBILIDAD <span className="text-[#00df9a]">WEB</span>
        </h1>
        <p className="py-4">
         Contactenos para poder trabajar juntos, 
         estamos a su disposicion.
        </p>
        <div className="flex justify-evenly md:w-[75%] my-6">
         {
            /* <a href=" https://www.facebook.com/profile.php?id=100075172364405" target="_blank">
          <FaFacebookSquare size={30} className="cursor-pointer hover:text-[#00df9a]" />
          </a>
             */
          }
          <a href=" https://www.instagram.com/visibilidadweb/" target="_blank">
          <FaInstagram size={30}   className="cursor-pointer hover:text-[#00df9a]" />
          </a>
          <a   href={`https://wa.me/+541166709006/?text=`}
           rel="noopener noreferrer"
          target="_blank">
          <FaWhatsapp size={30}   className="cursor-pointer hover:text-[#00df9a]" />
          </a>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-evenly mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Soluciones</h6>
          <ul>
          <li className="py-2 text-sm">
              <Link
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
                to="nosotros"
                className="p-4 cursor-pointer hover:text-[#00df9a]"
              >
                Nosotros
              </Link>
              </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Soporte</h6>
          <ul>
          <li className="py-2 text-sm">
              <Link
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
                to="precios"
                className="p-4 cursor-pointer hover:text-[#00df9a]"
              >
                Precios
              </Link>
              </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Compania</h6>
          <ul>
            <li className="py-2 text-sm">
              <Link
                spy={true}
                smooth={true}
                offset={10}
                duration={500}
                to="trabajos"
                className="p-4 cursor-pointer hover:text-[#00df9a]"
              >
                Trabajos
              </Link>
            </li>
          </ul>
        </div>
        {/*
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">Reclamo</li>
            <li className="py-2 text-sm">Política</li>
            <li className="py-2 text-sm">Términos</li>
          </ul>
        </div>
         */}
      </div>
    </div>
  );
};

export default Footer;
