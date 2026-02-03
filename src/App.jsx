import { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Components/Login.jsx";
import Home from "./Components/Home.jsx";
import Hero from "./Components/Hero.jsx";
import Category from "./Components/Category.jsx";
import Products from "./Components/Products.jsx";
import Banner from "./Components/Banner.jsx";
import Slide from "./Components/Slide.jsx";
import Footer from "./Components/Footer.jsx";
import Signup from "./Components/Signup.jsx";
import Shop from "./Components/Shop.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Card from "./Components/Card.jsx";
import Checkout from "./Components/Checkout.jsx";
import Women from "./Components/Women.jsx";
import Men from "./Components/Men.jsx";
import Kids from "./Components/Kids.jsx";
import Accessories from "./Components/Accessories.jsx";
import Detail from "./Components/Detail.jsx";

import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [cartCount, setCartCount] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home cartCount={cartCount} />
              <Hero />
              <Category />
              <Products
                cart={cart}
                setCart={setCart}
                setCartCount={setCartCount}
              />
              <Banner />
              <Slide
                cart={cart}
                setCart={setCart}
                setCartCount={setCartCount}
              />
              <Footer />
            </>
          }
        />

        <Route
          path="/shop"
          element={
            <>
              <Home cartCount={cartCount} />
              <Shop cart={cart} setCart={setCart} setCartCount={setCartCount} />
              <Footer />
            </>
          }
        />

        <Route
          path="/about"
          element={
            <>
              <Home cartCount={cartCount} />
              <About />
            </>
          }
        />

        <Route
          path="/contact"
          element={
            <>
              <Home cartCount={cartCount} />
              <Contact />
            </>
          }
        />

        <Route
          path="/card"
          element={
            <>
              <Home cartCount={cartCount} />
              <Card cart={cart} setCart={setCart} />
            </>
          }
        />

        <Route
          path="/checkout"
          element={
            <>
              <Home cartCount={cartCount} />
              <Checkout cart={cart} setCart={setCart} />
            </>
          }
        />

        <Route
          path="/Women"
          element={
            <>
              <Home cartCount={cartCount} />
              <Women
                cart={cart}
                setCart={setCart}
                setCartCount={setCartCount}
              />
              <Footer />
            </>
          }
        />

        <Route
          path="/Men"
          element={
            <>
              <Home cartCount={cartCount} />
              <Men cart={cart} setCart={setCart} setCartCount={setCartCount} />
              <Footer />
            </>
          }
        />

        <Route
          path="/Kids"
          element={
            <>
              <Home cartCount={cartCount} />
              <Kids cart={cart} setCart={setCart} setCartCount={setCartCount} />
              <Footer />
            </>
          }
        />

        <Route
          path="/Accessories"
          element={
            <>
              <Home cartCount={cartCount} />
              <Accessories
                cart={cart}
                setCart={setCart}
                setCartCount={setCartCount}
              />
              <Footer />
            </>
          }
        />

        <Route
          path="/detail"
          element={
            <>
              <Home cartCount={cartCount} />
              <Detail
                cart={cart}
                setCart={setCart}
                setCartCount={setCartCount}
              />
              <Footer />
            </>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
