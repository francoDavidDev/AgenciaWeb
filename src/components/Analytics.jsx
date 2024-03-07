import React from "react";
import imagen from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img className="w-[500px] mx-auto my-4 " src={imagen} alt="imagen" />
        <div className="flex flex-col justify-center  ">
          <p className="text-[#00DF9A] font-bold ">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 " >Manage Data Analytics Centrally</h1>
          <p >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum,
            similique! Quo reprehenderit quibusdam, mollitia, ratione,
            perferendis dolorem esse hic repellendus ullam ex consequatur vitae
            ipsam quia obcaecati autem qui dignissimos!
          </p>
          <button className="text-[#00DF9A] w-[200px] rounded-md  font-medium my-6 mx-auto md:mx-0 py-3 px-6 bg-[#000000] ">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
