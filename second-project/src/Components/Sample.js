import React from "react";
import { useContext } from "react";
import TitleContext from "../Context/TitleContext";

function Sample() {
    const {data}=useContext(TitleContext);
  return <h1>{data}</h1>;
}

export default Sample;
