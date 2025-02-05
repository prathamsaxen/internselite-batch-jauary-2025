import React, { useEffect, useState } from "react";
import Navigation from "../Navigation";

function Support() {
  const [data,setData]=useState(0);
  useEffect(() => {
    console.log("Effect Called");
  },[data]);

  // Blank -> It will only render first time

  return (
    <div>
      <Navigation />
      <h1>Support Page</h1>
      <pre>{data}</pre>
      <button onClick={()=>setData(data+1)}>Plus</button>
      <button onClick={()=>setData(data-1)}>Minus</button>
    </div>
  );
}

export default Support;
// UseEffect its a hook again which executes the program present in it when the dependency array will change.
