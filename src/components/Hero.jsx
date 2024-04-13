import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div  id='/' className="text-white" >
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
        <p className="text-[#00DF9A] font-bold  p-2 ">
          CRECIENDO CON CONTENIDO DIGITAL
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 ">
          CREZCA CON TECNOLOGIA
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4 ">
            Servicios
          </p>
          <p className="text-[#33ce9a]">
          <ReactTyped
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["WEBS", "SEO", "de MARKETING"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          </p>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-600">
          Supervise sus redes, contenido y negocio para facturar en plataformas
          digitales
        </p>
        <button className="bg-[#00DF9A] w-[200px] rounded-md  font-medium my-6 mx-auto py-3 px-6 text-black ">
         <a  href={`https://porfolio3d-ruby.vercel.app/`}
           rel="noopener noreferrer"
          target="_blank">
            https://porfolio3d-ruby.vercel.app/
            Empezar ahora</a> 
            {  /* <a  href={`https://wa.me/+541126318338/?text= `}
           rel="noopener noreferrer"
          target="_blank">
            Empezar ahora</a> */}
        </button>
      </div>
    </div>
  );
};

export default Hero;
