import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import DashBoard from "./components/authentication/DashBoard";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Products from "./pages/Products";

import PageNotFound from "./components/PageNotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/authentication/ProtectedRoute";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/products" element={<Products />} />
          {/* <Route path="/products/:id" element={<ProductDetails/>} /> */}
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
    </>
  );
};

export default App;
