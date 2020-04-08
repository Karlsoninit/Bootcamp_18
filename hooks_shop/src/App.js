import React, { useEffect } from "react";
import CardProduct from "./components/cardProduct/CardProduct.js";
import { ShopState } from "./context/shopState";
import { SizeFilter } from "./components/sizeFilter/SizeFilter.js";
import Cart from "./components/cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { Profile } from "./components/profile/Profile.js";
import products from "./products";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: "ADD_PRODUCT", payload: products });
  }, []);

  const allProducts = useSelector((state) => state.products);
  console.log("allProducts", allProducts);

  return (
    <>
      <Profile allProducts={allProducts} />

      <ShopState>
        <SizeFilter />
        <Cart />
        <CardProduct />
      </ShopState>
    </>
  );
}

export default App;
