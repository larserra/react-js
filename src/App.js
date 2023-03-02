import React, {useState} from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import DashBoard from './pages/DashBoard'

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Rjs from './others/Rjs'
import Rcss from './others/Rcss'
import Drf from './others/Drf'

import PageNotFound from './components/PageNotFound'
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  const [user, setUser] = useState(null)
  return (
    <BrowserRouter>

    <Header />
    <Routes >
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />

      {/* <Route path="/products/:id" element={<ProductDetails/>} /> */}
      {/* <Route path="/cart/" element={<Cart />} />

      <Route path="/cart/:id" element={<Cart />} /> */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login setUser={setUser}/>} />
      <Route path="/dashboard" element={
        <ProtectedRoute user={user}>
          <DashBoard user={user}/>
        </ProtectedRoute>
      } />
      <Route path="react-js++/" element={<Rjs />} />
      <Route path="react-css++/" element={<Rcss />} />
      <Route path="python-drf++/" element={<Drf />} />
      
      < Route path="*" element={<PageNotFound />} />
      <Route />
    </Routes>
    <Footer /> 
  </BrowserRouter>
  )
}

export default App
