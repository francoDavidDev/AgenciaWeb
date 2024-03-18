import React from "react";
import Hero from "../components/Hero";
import Analytics from "../components/Analytics";
import Cards from "../components/Cards";
import Newsletter from "../components/Newsletter";
import Works from "./Works";

const Main = () => {
  return (
    <div>
      <Hero  />
      <Analytics  />
    {/*   <Newsletter />*/}
      <Works />
      <Cards />
    
    </div>
  );
};

export default Main;
