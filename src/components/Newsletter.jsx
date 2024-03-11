import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16  text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 ">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl  font-bold py-2">
            ¿Quieres consejos y trucos para 
        
            tener  visibilidad  digital?
          </h1>
          <p>Suscríbete a nuestro newsletter y mantente al día</p>
        </div>
        <div className="my-4 ">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black "
              type="email"
              placeholder="ingresar Email"
            />
            <button className="bg-[#00DF9A] w-[200px] rounded-md  font-medium mx-auto my-6 ml-4 py-3 px-6 text-black">
              {" "}
              Notificarme{" "}
            </button>
          </div>
          <p>
          Nos preocupamos por la protección de tus datos,{" "}
            <span className="text-[#00DF9A] "> en nuestra Política de Privacidad</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
