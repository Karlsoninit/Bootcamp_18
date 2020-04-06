import React, { useContext } from "react";
import { MyContext } from "../context/createContext";

const GetData = () => {
  const {
    state: { news },
  } = useContext(MyContext);

  console.log("useContext", news);
  return <></>;
};

export default GetData;
