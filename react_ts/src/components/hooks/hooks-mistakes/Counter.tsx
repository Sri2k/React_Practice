import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState<number>(0);
  //
  // const handleIncrementer = () => {
  //   setCount(count + 1);
  //   console.log("count1 : ", count);
  //   setCount(count + 1);
  //   console.log("count2 : ", count);
  // };

  // resolution
  const handleIncrementer = () => {
    setCount((previous) => previous + 1);
    console.log("count1 : ", count);
    setCount((previous) => previous + 1);
    console.log("count2 : ", count);
  };
  return (
    <>
      <div>Count : {count}</div>
      <div>
        <h4>Increment Count: </h4>
        <button onClick={handleIncrementer}>Increment</button>
      </div>
    </>
  );
};

export default Counter;
