import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  let [valid,setValid]=useState(true);

  console.log("Process Running...");

  const handle = () => {
    setCount(count + 1);
  };

  const dec = () => {
    setCount(count - 1);
  };

  const data = () => {
    alert("Button Clicked!");
  };

  let data1=()=>{
    setValid(!valid)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1>Click Below Button To Count Them</h1>

      <h3>{count}</h3>

      <button onClick={handle} className="bg-black text-2xl text-white p-4 rounded-2xl">Increment</button>

      <button onClick={dec} className="bg-black text-2xl text-white p-4 rounded-2xl">Decrement</button>

      <button onClick={data}>Check Here</button>

      <h3>{valid?"This is Valid":"This is InValid"}</h3>

      <button onClick={data1}>Check Here Valid</button>
    </div>
  );
};

export default App;