import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div id="precios" className="w-full py-[10rem] px-4 bg-white ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
        
          <h2 className="text-2xl font-bold text-center py-8 ">Web Basica</h2>
          <p className="text-center text-4xl font-bold mb-5">$50.000</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8">Hosting 1 mes.</p>
            <p className="py-2 border-b mx-8"> Dominio 1 año.</p>
            <p className="py-2 border-b mx-8">SSL 1 año.</p>
            <p className="py-2 border-b mx-8">Personalizacion baja.</p>
            <p className="py-2 border-b mx-8">Boton de WhatsApp.</p>
            <p className="py-2 border-b mx-8">Vinculo de redes sociales.</p>
            <p className="py-2 border-b mx-8">Personalizacion baja.</p>
            <p className="py-2 border-b mx-8">Mantenimiento gratis por 15 dias.</p>
            <p className="py-2 border-b mx-8">Primero pago 70%.</p>
            <p className="py-2 border-b mx-8">5 secciones.</p>

            <p className="py-2 border-b mx-8"> Tiempo de entrega acordado.</p>
          </div>
          <button className="bg-[#00DF9A] w-[200px] rounded-md  font-medium my-6 mx-auto py-3 px-6 text-black">
            Consultar
          </button>
        </div>

        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4  md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
       
          <h2 className="text-2xl font-bold text-center py-8 ">Web Premium</h2>
          <p className="text-center text-4xl font-bold mb-4 ">$90.000</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8">Hosting 1 año.</p>
            <p className="py-2 border-b mx-8"> Dominio 1 año.</p>
            <p className="py-2 border-b mx-8">SSL 1 año.</p>
            <p className="py-2 border-b mx-8">Personalizacion alta.</p>
            <p className="py-2 border-b mx-8">Ajustes de marca.</p>
            <p className="py-2 border-b mx-8">Carrito, pasarela de pago</p>
            <p className="py-2 border-b mx-8">Seccion de servicios.</p>
            <p className="py-2 border-b mx-8">Portafolio</p>
            <p className="py-2 border-b mx-8">Formulario</p>
            <p className="py-2 border-b mx-8">Boton de WhatsApp.</p>
            <p className="py-2 border-b mx-8">Vinculo de redes sociales.</p>
            <p className="py-2 border-b mx-8">Correo empresarial.</p>
            <p className="py-2 border-b mx-8">Mantenimiento gratis por 30 dias.</p>
            <p className="py-2 border-b mx-8">Primero pago 55%.</p>
            <p className="py-2 border-b mx-8">5 secciones.</p>
            <p className="py-2 border-b mx-8"> Tiempo de entrega acordado.</p>
          </div>
          <button className="bg-[#000000] w-[200px] rounded-md  font-medium my-6 mx-auto py-3 px-6 text-[#00DF9A]">
            Consultar
          </button>
        </div>

        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
       
          <h2 className="text-2xl font-bold text-center py-8  text-[#00DF9A] ">¡Web Unica!</h2>
          <p className="text-center text-4xl font-bold ">$150.000</p>
          <div className="text-center font-medium">
          <p className="py-2 border-b mx-8">Hosting 1 mes.</p>
            <p className="py-2 border-b mx-8"> Dominio 1 año.</p>
            <p className="py-2 border-b mx-8">SSL 1 año.</p>
            <p className="py-2 border-b mx-8">Personalizacion especial.</p>
            <p className="py-2 border-b mx-8">Ajustes de marca.</p>
            <p className="py-2 border-b mx-8">Carrito, pasarela de pago</p>
            <p className="py-2 border-b mx-8">Seccion de servicios.</p>
            <p className="py-2 border-b mx-8">Portafolio</p>
            <p className="py-2 border-b mx-8">Formulario</p>
            <p className="py-2 border-b mx-8">Boton de WhatsApp.</p>
            <p className="py-2 border-b mx-8">Vinculo de redes sociales.</p>
            <p className="py-2 border-b mx-8">Correo empresarial.</p>
            <p className="py-2 border-b mx-8">Mantenimiento gratis por 60 dias.</p>
            <p className="py-2 border-b mx-8">Reseñas de Google My Bussines.</p>
            <p className="py-2 border-b mx-8">Reseñas de Google Analytics.</p>
            <p className="py-2 border-b mx-8">Primero pago 50%.</p>
            <p className="py-2 border-b mx-8">5 secciones.</p>
            <p className="py-2 border-b mx-8"> Tiempo de entrega acordado.</p>
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
