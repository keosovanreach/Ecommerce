import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Hero from "./Components/Hero";
import Category from "./Components/Category";
import Products from "./Components/Products";
import Banner from "./Components/Banner";
import Slide from "./Components/Slide";
import Footer from "./Components/Footer";

import Shop from "./Components/Shop";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Cart from "./Components/Card";
import Checkout from "./Components/Checkout";

import Women from "./Components/Women";
import Men from "./Components/Men";
import Kids from "./Components/Kids";
import Accessories from "./Components/Accessories";
import Detail from "./Components/Detail";

import Login from "./Components/Login";
import Signup from "./Components/Signup";

import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const cartCount = cart.length;

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <Router>
      <Home cartCount={cartCount} />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Category />
              <Products cart={cart} setCart={setCart} />
              <Banner />
              <Slide cart={cart} setCart={setCart} />
            </>
          }
        />

        <Route path="/shop" element={<Shop cart={cart} setCart={setCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        <Route
          path="/checkout"
          element={<Checkout cart={cart} setCart={setCart} />}
        />

        <Route
          path="/women"
          element={<Women cart={cart} setCart={setCart} />}
        />
        <Route path="/men" element={<Men cart={cart} setCart={setCart} />} />
        <Route path="/kids" element={<Kids cart={cart} setCart={setCart} />} />
        <Route
          path="/accessories"
          element={<Accessories cart={cart} setCart={setCart} />}
        />

        <Route
          path="/detail/:id"
          element={<Detail cart={cart} setCart={setCart} />}
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
