
import { useState } from "react";
const App = () => {

  const [usertext, setText] = useState("");
  const [add,setAdd]=useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  
  };

  const handleCheck=(e)=>{
     e.preventDefault();
     setAdd((prev)=>[...prev,usertext])
     setText("")
  }
  return (
    <div>
      <form onSubmit={handleCheck}>
      <h1>Form Handling</h1>
      <br></br>
      <label>Enter Your Name:</label>
      <input type="text" value={usertext} onChange={handleChange}/>
      <button type="submit"> Add Name </button>
      </form>
    <div>
      {add.map((e,i)=>(
        <p key={i}>{e}</p>
      ))}
      </div>
    </div>
  )
}

export default App