import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Works from "./pages/Works";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";

function App() {
  return (
    <>

      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
