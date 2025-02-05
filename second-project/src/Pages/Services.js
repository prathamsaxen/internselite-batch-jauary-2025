import React, { useState } from "react";
import Navigation from "../Navigation";

function Services() {
  // Conditional Rendering??
  // If your condition is true then it will render first one else it will render second one
  // Condition ? COde To bE Executed : Code to be executed 2
  const [condition, setCondition] = useState(false);
  return (
    <div>
      <Navigation />
      <h1>Services Page</h1>
      {condition ? <h1>True Condition</h1> : <h1>False Condition</h1>}
      <button onClick={() => setCondition(!condition)}>Switch Condition</button>
    </div>
  );
}

export default Services;
