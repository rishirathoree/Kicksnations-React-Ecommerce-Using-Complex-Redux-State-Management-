import { Accessories } from "./Pages/Accessories";
import { Apparel } from "./Pages/Apparel";
import { Basketball } from "./Pages/Basketball";
import Cart from "./Pages/Cart";
import { Footwear } from "./Pages/Footwear";
import { Girls } from "./Pages/Girls";
import { Home } from "./Pages/Home";
import Nopagefound from "./Pages/Nopagefound";


import Product from "./Pages/Product";
import { Slides } from "./Pages/Slides";
import Navbar from "./components/Navbar";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Basketball" element={<Basketball />} />
        <Route path="/Footwear" element={<Footwear />} />
        <Route path="/Girls" element={<Girls />} />
        <Route path="/Slides" element={<Slides />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Apparel" element={<Apparel />} />
        <Route path="/Accessories" element={<Accessories />} />
        <Route path="*" element={<Nopagefound />} />
        <Route path="/Products/:id" element={<Product />} />
        
      </Routes>
      
    </BrowserRouter>
    </>
  );
}

export default App;
