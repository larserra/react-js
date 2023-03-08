import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import DashBoard from "./components/authentication/DashBoard";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";

import PageNotFound from "./components/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/authentication/ProtectedRoute";

import { useDispatch, useSelector } from "react-redux";
import { calculateTotals } from "./redux/cartSlice";




const App = () => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);
 
  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);
  return (

   
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />

        {/* <Route path="/products/:id" element={<ProductDetails/>} /> */}
        {/* <Route path="/cart/" element={<Cart />} />

      <Route path="/cart/:id" element={<Cart />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute user={user}>
              <DashBoard user={user} />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<PageNotFound />} />
        <Route />
      </Routes>
      <Footer />
    </BrowserRouter>

  );
};

export default App;
