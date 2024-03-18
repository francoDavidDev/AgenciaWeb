import React, { useEffect, useState } from "react";
import { BUTTONS, WORKS } from "../data";
import { Link } from "react-router-dom";

export const CardsFilter = ({path, image, name, title, tag}) => {
  return (
    <div
      className="border-none shadow-sm rounded-lg hover:scale-105 duration-300  "
    >
      <Link to={path} target="_blank">
        <img
          className="w-full h-[200px] rounded-lg object-cover rounded-t-lg "
          src={image}
          alt={name}
        />
      </Link>
     
    </div>
  );
};

const Works = () => {
  const [category, setCategory] = useState("pagina web");

  const onChange = (value) => {
    setCategory(value);
    console.log(category);
  };



  return (
    <section id="trabajos" className="w-full m-auto py-12 bg-black">
      <div className="max-w-[1240px] mx-auto px-4 py-12 ">
        <h1 className="text-white font-bold text-4xl text-center">
          Trabajos Realizados<span className="text-[#33ce9a] ">.</span>
        </h1>
      </div>
      <div className="flex justify-around px-10">
        {BUTTONS.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => onChange(item.value)}
              className="text-white bg-[#33ce9a] my-10 rounded-lg  shadow-lg hover:bg-[#3caa86] transition ease-in-out duration-300 "
            >
              <p className="font-semibold text-sm  md:text-lg px-5 py-3 md:px-5 md:py-3  ">{item.name}</p>
            </button>
          );
        })}
      </div>
      <div className="mx-auto w-[90%] grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3  gap-10 pt-4 ">
      {WORKS.map((item, index) => {
    return (
        (item.tag === category || category === 'todos') ? (
            <div key={index}>
                <CardsFilter
                    tag={item.tag}
                    title={item.title}
                    path={item.path}
                    image={item.image}
                    name={item.name}
                    index={index}
                />
            </div>
        ) : null
    );
})}

      </div>
    </section>
  );
};

export default Works;
