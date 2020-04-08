import React from "react";

export const Profile = (props) => {
  console.log("props", props.allProducts);
  props.allProducts.map((elem) => console.log("elem", elem));
  return <h2>profile</h2>;
};
