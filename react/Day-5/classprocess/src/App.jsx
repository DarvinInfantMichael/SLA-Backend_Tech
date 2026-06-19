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
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-amber-200">
      <h1 className="text-shadow-black text-2xl">Click Below Button To Count Them</h1>

      <h3 className="text-2xl font-bold">{count}</h3>

      <button onClick={handle} className="bg-black text-2xl text-white p-4 rounded-2xl">Increment</button>

      <button onClick={dec} className="bg-black text-2xl text-white p-4 rounded-2xl">Decrement</button>

      <button onClick={data} className="bg-black text-2xl text-white p-4 rounded-2xl">Check Here</button>

      <h3 className="text-2xl font-bold">{valid?"This is Valid":"This is InValid"}</h3>

      <button onClick={data1} className="bg-black text-white p-4 rounded-2xl">Check Here Valid</button>
    </div>
  );
};

export default App;