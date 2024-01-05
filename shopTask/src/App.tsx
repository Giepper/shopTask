import { useState } from "react";
import "./App.css";
import ProductsContainer from "./components/ProductsContainer.jsx";
import ShopPage from "./components/ShopPage.jsx";
import Header from "./components/Header.js";

function App() {
  return (
    <>
      <Header />
      <ProductsContainer />
      {/* <ShopPage /> */}
    </>
  );
}

export default App;
