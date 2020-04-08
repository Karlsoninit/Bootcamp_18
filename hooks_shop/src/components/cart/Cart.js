import React, { useContext, useState } from "react";

import { ShopContext } from "../../context/shopContext";
import CardList from "../../ui/Card";

const Cart = () => {
  const { state } = useContext(ShopContext);
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div style={{ border: "1px solid red" }}>
      <h2>CART</h2>
      <button onClick={handleOpen}>CART</button>
      <h2>{state.quantity}</h2>
      {isOpen &&
        state.cart.map((product) => (
          <CardList key={product.id} product={product} />
        ))}
    </div>
  );
};

export default Cart;
