import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import { PRICES } from "../data";

const Cards = () => {
  return (
    <div id="precios" className="w-full py-[10rem] px-4 bg-white ">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
        {PRICES.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full shadow-xl bg-gray-100 flex flex-col p-4  md:my-0 my-8 rounded-lg hover:scale-105 duration-300"
            >
              <h2 className={ item.title === 'Web Unica' ?   ' text-2xl font-bold text-center py-8 text-[#33ce9a] ' :  ` text-2xl font-bold text-center py-8  `}>
                {item.title}
              </h2>
              <p className="text-center text-4xl font-bold mb-4 ">
                {item.price}
              </p>
              <div className="text-center font-medium">
                {item.services.map((item, index) => {
                  return (
                    <>
                      <p key={index} className="py-2 border-b mx-8">
                        {item}
                      </p>
                    </>
                  );
                })}
              </div>
              <button className="bg-[#000000] w-[200px] rounded-md  font-medium my-6 mx-auto py-3 px-6 text-[#00DF9A]">
                Consultar
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
