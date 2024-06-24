import React, { useState } from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
import { BUTTONS, PRICES } from "../data";

import { FaWhatsapp } from "react-icons/fa";

export const Card = ({ title, price, services, message }) => {
  return (
    <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4  md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
      <h2
        className={
          title === "Web Única" || title === "Menu Único"
            ? " text-2xl font-bold text-center py-8 text-[#33ce9a] "
            : ` text-2xl font-bold text-center py-8  text-black `
        }
      >
        {title}
      </h2>
      <p className="text-center text-4xl font-bold mb-4 ">{price}</p>
      <div className="text-center font-medium">
        {services.map((item, index) => {
          return (
            <>
              <p key={index} className="py-2 border-b mx-8">
                {item}
              </p>
            </>
          );
        })}
      </div>
      <button className="bg-[#000000] w-[200px] rounded-md  font-medium my-6 mx-auto py-3 px-6 text-[#00DF9A] flex justify-center items-center gap-2 hover:bg-[#151515] hover:w-[205px]  hover:h-[50px]  duration-200  ease-in-out">
        <a
          href={`https://wa.me/+541166709006/?text=${message} `}
          rel="noopener noreferrer"
          target="_blank"
          className="hover:text-xl  duration-200  ease-in-out"
        >
          CONSULTAR
        </a>
        <FaWhatsapp className="text-xl" />
      </button>
    </div>
  );
};

const Cards = () => {
  const [category, setCategory] = useState("pagina web");

  const onChange = (value) => {
    setCategory(value);
    console.log(category);
  };

  return (
    <div id="precios" className="w-full py-[10rem] px-4 bg-white ">
      <div className="max-w-[1240px] mx-auto px-4 py-12 ">
        <h1 className="text-black font-bold text-4xl text-center">
          Precios<span className="text-[#33ce9a] ">.</span>
        </h1>
      </div>
      <div className="flex sm:justify-around justify-between px-2 ">
        {BUTTONS.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => onChange(item.value)}
              className={
                item.value !== "todos"
                  ? "text-white bg-[#33ce9a] my-10 rounded-lg  shadow-lg hover:bg-[#3caa86] transition ease-in-out duration-300 m-auto  "
                  : "hidden"
              }
            >
              <p className="font-semibold text-sm  md:text-lg px-5 py-3 md:px-5 md:py-3  ">
                {item.name}
              </p>
            </button>
          );
        })}
      </div>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8 ">
        {PRICES.map((item, index) => {
          return item.tag === category ? (
            <div key={index}>
              <Card
                title={item.title}
                price={item.price}
                services={item.services}
                message={item.message}
              />
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default Cards;
