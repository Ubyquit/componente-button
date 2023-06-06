import React from "react";
import { useState } from "react";

export const MyButton = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return <button onClick={handleClick}>Cliqueame {count} !</button>;
};
