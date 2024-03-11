import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white "
            src={Single}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8 ">Single Page</h2>
          <p className="text-center text-4xl font-bold ">$50.000</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">5 secciones</p>
            <p className="py-2 border-b mx-8">Sin mantenimiento</p>
            <p className="py-2 border-b mx-8"> Formulario y link de rede</p>
          </div>
          <button className="bg-[#00DF9A] w-[200px] rounded-md  font-medium my-6 mx-auto py-3 px-6 text-black">
          Consultar
          </button>
        </div>

        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4  md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent "
            src={Double}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8 ">Web Corpotativa</h2>
          <p className="text-center text-4xl font-bold ">$90.000</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">+5 secciones</p>
            <p className="py-2 border-b mx-8">Mantenimiento</p>
            <p className="py-2 border-b mx-8"> Fomulario + link de redes + funcionalidades</p>
          </div>
          <button className="bg-[#000000] w-[200px] rounded-md  font-medium my-6 mx-auto py-3 px-6 text-[#00DF9A]">
          Consultar
          </button>
        </div>


        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white "
            src={Triple}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8 ">E-Commerce</h2>
          <p className="text-center text-4xl font-bold ">$150.000</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">+5 secciones</p>
            <p className="py-2 border-b mx-8">Pasarela de compra</p>
            <p className="py-2 border-b mx-8"> Seguridad y host</p>
          </div>
          <button className="bg-[#00DF9A] w-[200px] rounded-md  font-medium my-6 mx-auto py-3 px-6 text-black">
            Consultar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
