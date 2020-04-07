import React, { useContext, useRef } from "react";
import { ShopContext } from "../../context/shopContext";
import ButtonSize from "../../ui/buttonSize";

export const SizeFilter = () => {
  const { state } = useContext(ShopContext);

  const res = state.products.reduce((acc, product) => {
    acc.push(...product.availableSizes);
    return acc;
  }, []);
  const uniqueSIze = [...new Set(res)];
  return (
    <>
      <div style={{ display: "flex" }}>
        {uniqueSIze.map((size) => (
          <ButtonSize key={size} size={size} />
        ))}
      </div>
    </>
  );
};
