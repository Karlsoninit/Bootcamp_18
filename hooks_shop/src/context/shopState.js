import React from "react";
import { ShopContext } from "./shopContext";
import products from "../products";

export const ShopState = ({ children }) => (
  <ShopContext.Provider
    value={{
      products,
    }}
  >
    {children}
  </ShopContext.Provider>
);
