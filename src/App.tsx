import React from "react";
import "./App.css";
import { MainPage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductsPage } from "./pages/products";
import { Header } from "./components/header";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { pink } from "@mui/material/colors";
const Parse = require("parse");

const PARSE_APPLICATION_ID = "ozTBEYNRXjQjaZbCviVSZnbkNoILGOP5xruy92IY";
const PARSE_HOST_URL = "https://parseapi.back4app.com/";
const PARSE_JAVASCRIPT_KEY = "mlbuxEKNAbY0HwmAxy8DwHtz39NKtKHdsOO5X77B";
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

function App() {
 const theme = createTheme({
  palette: {
   primary: {
    main: "#f9a8d4",
    // light: will be calculated from palette.primary.main,
    // dark: will be calculated from palette.primary.main,
    // contrastText: will be calculated to contrast with palette.primary.main
   },
  },
 });

 return (
  <div className="App">
   <ThemeProvider theme={theme}>
    {window.location.pathname !== "/" ? <Header /> : <></>}
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/produtos" element={<ProductsPage />} />
     </Routes>
    </BrowserRouter>
   </ThemeProvider>
  </div>
 );
}

export default App;
