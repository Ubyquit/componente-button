import React from "react";
import { useState } from "react";

export const MyButton = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    console.log(count);
  }
  return <button onClick={handleClick}>Cliqueame {count} !</button>;
};
