import React, { useState } from "react";

function Counter(props) {
  const [number, setNumber] = useState(0);
  return (
    <div className="m">
        <h2>{props.name}</h2>
      <button onClick={() => setNumber(number + 1)}>Plus Plus</button>
      <p>{number}</p>
      <button onClick={() => setNumber(number - 1)}>Minus Button</button>
    </div>
  );
}

export default Counter;