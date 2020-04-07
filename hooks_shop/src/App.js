import React from "react";
import CardProduct from "./components/cardProduct/CardProduct.js";
import { ShopState } from "./context/shopState";
import { SizeFilter } from "./components/sizeFilter/SizeFilter.js";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <ShopState>
      <SizeFilter />
      <Cart />
      <CardProduct />
    </ShopState>
  );
}

export default App;
