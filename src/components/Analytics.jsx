import React from "react";
import imagen from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div id="nosotros" className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img className="w-[500px] mx-auto my-4 " src={imagen} alt="imagen" />
        <div className="flex flex-col justify-center  ">
          <p className="text-[#00DF9A] font-bold ">CALCULAMOS SU RENDIMIENTO</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 ">
            Tenga visibilidad en este mundo dominado por la tecnología
          </h1>
          <p>
            Desde el rendimiento de sus proyectos hasta el impacto en su
            organización, nos encargamos que su negocio tenga la visibilidad
            para que <span className="text-[#00DF9A]">crezca en la web.</span>
          </p>
          <button className="bg-[#00DF9A] w-[200px] rounded-md  font-medium my-6 mx-auto py-3 px-6 text-black ">
         <a  href={`https://wa.me/+541166709006/?text= `}
           rel="noopener noreferrer"
          target="_blank">
            Empezar ahora</a> 
        </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
