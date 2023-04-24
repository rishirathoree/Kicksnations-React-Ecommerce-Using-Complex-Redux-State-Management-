import AuthContextProvider from "./Context/AuthContextProvider";
import { Accessories } from "./Pages/Accessories";
import Accountpage from "./Pages/Accountpage";
import { Apparel } from "./Pages/Apparel";
import { Basketball } from "./Pages/Basketball";
import Cart from "./Pages/Cart";
import { Footwear } from "./Pages/Footwear";
import { Girls } from "./Pages/Girls";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Pagerror } from "./Pages/Pagerror";

import Product from "./Pages/Product";
import { Signup } from "./Pages/Signup";
import { Slides } from "./Pages/Slides";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Protectroute from "./components/Protectroute";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
          <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Basketball" element={<Basketball />} />
          <Route path="/Footwear" element={<Footwear />} />
          <Route path="/Girls" element={<Girls />} />
          <Route path="/Slides" element={<Slides />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Account" element={
          <Protectroute>
          <Accountpage />
          </Protectroute>
          } />
          <Route path="/Apparel" element={<Apparel />} />
          <Route path="/Accessories" element={<Accessories />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="*" element={<Pagerror />} />
          <Route path="/Products/:id" element={<Product />} />
        </Routes>
          </AuthContextProvider>
          <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
