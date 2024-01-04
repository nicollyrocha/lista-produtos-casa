import React from "react";
import "./App.css";
import { MainPage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductsPage } from "./pages/products";
const Parse = require("parse");

const PARSE_APPLICATION_ID = "ozTBEYNRXjQjaZbCviVSZnbkNoILGOP5xruy92IY";
const PARSE_HOST_URL = "https://parseapi.back4app.com/";
const PARSE_JAVASCRIPT_KEY = "mlbuxEKNAbY0HwmAxy8DwHtz39NKtKHdsOO5X77B";
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

function App() {
 return (
  <div className="App">
   <BrowserRouter>
    <Routes>
     <Route path="/" element={<MainPage />} />
     <Route path="/produtos" element={<ProductsPage />} />
    </Routes>
   </BrowserRouter>
  </div>
 );
}

export default App;
