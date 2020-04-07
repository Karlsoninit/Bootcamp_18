import React, { useContext } from "react";
import CardList from "../../ui/Card";
import { ShopContext } from "../../context/shopContext";

const CardProduct = () => {
  const { products } = useContext(ShopContext);
  return products.map((product) => <CardList key={product.id} {...product} />);
};

export default CardProduct;
