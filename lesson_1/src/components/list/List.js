import React from "react";

const List = props => {
  //   console.log(Object.keys(props).length);
  return (
    <>
      <h2>{props.ps.title}</h2>
      <h4>{props.ps.warranty.year}</h4>
      <img alt="playstation" src={props.ps.image} />
    </>
  );
};

export default List;
