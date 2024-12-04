import React, { useState, useEffect } from "react";

const Mounting = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component did mount or update");
    return () => {
      console.log("Component will unmount");
    };
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Mounting;