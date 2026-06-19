import { Component } from "react";
import { useState } from "react";

class App extends Component {

  constructor(){
    super();
    console.log("1.Constructor");
  }
  componentDidMount(){
    console.log("3.Compnent Did Mount");
  }

  componentDidUpdate(){
    console.log("4.Component Did Update");
  }

  componentWillUnmount(){
    console.log("5.Component Will Unmount");
    
  }
  render() {
    console.log("2.Rendering..")

    const [count ,setCount]= new useState(0);

    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-500 mt-3">
        <div className="bg-white shadow-xl rounded-2xl p-8 w-96 text-center">
          <h1 className="text-3xl font-bold text-blue-600 mb-3">
            Hello, I am Darvin
          </h1>

          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            React Class Component
          </h2>

          <p className="text-gray-600">
            <span className="font-semibold">Age:</span> 21
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8 w-96 text-center mt-3">
          <h1 className="text-3xl font-bold text-blue-600 mb-3">LifeCycle Methods</h1>
        </div>

        <div className="bg-white shadow-xl rounded-2xl p-8 w-98 text-center mt-3">
          <h1 className="text-3xl font-bold text-blue-600 mb-3">This is For UseState Syntax and Counter Process..</h1>
          <div>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increament</button>
            <button onClick={()=>setCount(count-1)}>Decreament</button>
            <button onClick={()=>setCount(0)}>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;