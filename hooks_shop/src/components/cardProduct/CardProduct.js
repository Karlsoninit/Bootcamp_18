import React, { useContext } from "react";
import CardList from "../../ui/Card";
import { ShopContext } from "../../context/shopContext";

const CardProduct = () => {
  const { state } = useContext(ShopContext);

  return state.filterProducts.length
    ? state.filterProducts.map((product) => (
        <CardList key={product.id} product={product} />
      ))
    : state.products.map((product) => (
        <CardList key={product.id} product={product} />
      ));
};

export default CardProduct;
