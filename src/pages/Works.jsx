import React from "react";
import { WORKS } from "../data";
import { Link } from "react-router-dom";

const Works = () => {
  return (
    <section id='trabajos' className="w-full m-auto py-12 bg-black">
      <div className="max-w-[1240px] mx-auto px-4 py-12 ">
        <h1 className="text-white font-bold text-4xl text-center">
          Trabajos Realizados
        </h1>
      </div>
      <div className="mx-auto w-[90%] grid grid-cols-2 lg:grid-cols-3 gap-10 pt-4 ">
        {WORKS.map((item, index) => {
          return (
            <div
              key={index}
              className="border-none shadow-sm rounded-lg hover:scale-105 duration-300 bg-[#33ce9a] "
            >
              <Link to={item.path} target="_blank">
                <img
                  className="w-full h-[200px] object-cover rounded-t-lg "
                  src={item.image}
                  alt={item.name}
                />
              </Link>
              <div className="flex justify-between px-2 py-4  ">
                <p className="font-bold text-black ">{item.title} </p>
                <p>
                  {" "}
                  <span className="text-white p-1">{item.tag}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Works;
