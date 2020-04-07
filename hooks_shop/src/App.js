import React from "react";
import CardProduct from "./components/cartProduct/CardProduct.js";
import { ShopState } from "./context/shopState";

function App() {
  return (
    <ShopState>
      <CardProduct />
    </ShopState>
  );
}

export default App;
