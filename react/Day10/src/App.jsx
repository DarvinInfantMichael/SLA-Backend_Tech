import { useState } from "react"

const App = () => {

  const[userData,setUserData]=useState({userName:"",userAge:"",userEmail:""});
  const[saveData,setsaveData]=useState([]);

  const HandleChange=(e)=>{
    setUserData({...userData,[e.target.name]:e.target.value})
  }

  const handleClick =(e)=>{
    e.preventDefault();

    const res=JSON.parse(localStorage.getItem("userItem"))||[];
    

    const checkEmail=res.find((e)=>(e.userEmail===userData.userEmail))
    if(checkEmail){
      alert("This Email is Already Exists");
      return
    }

    const checkName=res.find((e)=>(e.userName===userData.userName))
    if(checkName){
      alert("This Name is Already Exists");
      return
    }
  
    if (userData.userAge < 18) {
  alert("You are not Eligible to Register");
  return;
}

alert('User Added Succesfully');

    res.push(userData);
    localStorage.setItem("userItem",JSON.stringify(res));
    
    setsaveData(res);
    useState({userName:"",userAge:"",userEmail:""});
}


const handleEdit = (user, index) => {
  setUserinput(user);
  setEditIndex(index);
};

const handleDelete = (index) => {
  setSavedata(savedata.filter((_, i) => i !== index));
};
  return (
    <div>
      <div>
        <h1>
          Form Handling in React
        </h1>
        <h1>
          Registration Form: 
        </h1>

        <input type="text" name="userName" onChange={HandleChange} placeholder="Enter Name .." value={userData.userName}/>
        <input type="number" name="userAge" onChange={HandleChange} placeholder="Enter Age.." value={userData.userAge}/>
        <input type="email" name="userEmail" onChange={HandleChange} placeholder="Enter Email" value={userData.userEmail}/>

        <button onClick={handleClick}>Rgister User</button>

        <div>
          <div>
            {saveData.map((e,i)=>(
              <>
              <p key={i}>{e.userName}</p>
              <p>{e.userAge}</p>
              <p>{e.userEmail}</p>
              
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
            </>
            ))}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default App