import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
//-------------------------------------------REACT BOOTSTRAP CSS
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/js/bootstrap.js";
//--------------------------------------------ALERT REACT TOASTIFY

import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// -----------------------------------------------REDUX TOOLKIT
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

//===========================================IMPORT SLICE
import cartReducer from "./redux/cartSlice";
import modalReducer from "./redux/modalSlice";

//===========================================
//===========================================

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer transition={Flip} position='top-center' />
      <App />
    </Provider>
  </React.StrictMode>
);
