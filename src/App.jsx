import React from "react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/header";
import Calculator from "./components/calculator";

function App() {
  return (
    <>
      <Header />
      <Calculator />
    </>
  );
}

export default App;
