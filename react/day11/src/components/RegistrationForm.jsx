import { useState } from "react"
import { useNavigate } from "react-router-dom";


const RegistrationForm = () => {

    const nav = useNavigate();

    const[userData,setUserData]=useState({userName:"",userEmail:"",userPass:""});
    const[dbdata,setDbdata]=useState([]);

    const handleChange =(e)=>{

        setUserData ({...userData,[e.target.name]:e.target.value});

    }

    const handleClick =(e)=>{

        e.preventDefault();

        if(userData.userName==="" ||userData.userEmail===""||userData.userPass===""){
            alert('Enter All the Inputs')
            return
        }

        const res=JSON.parse(localStorage.getItem("Items"))||[];

        const checkEmail=res.find((e)=>e.userEmail===userData.userEmail);

        if(checkEmail){
            alert("This Email already Exists Enter new Email")
            return
        }

        res.push(userData);



        localStorage.setItem("Items",JSON.stringify(res));
        setDbdata(res);

        alert("Successfully Added...")

        setUserData({userName:"",userEmail:"",userPass:""});

        nav("/login");
    }

  return (
    <div>
        <div>
            <h1>
                Registraion Process
            </h1>
        </div>
        <div>

            <form onSubmit={handleClick}>

                <label>Enter UserName:</label>
                <input type="text"
                onChange={handleChange}
                name="userName"
                value={userData.userName}
                placeholder="Enter Name..."/>
                <br></br>

                <label>Enter UserEmail:</label>
                <input type="emai"
                onChange={handleChange}
                name="userEmail"
                value={userData.userEmail}
                placeholder="Enter Email..."/>
                <br></br>

                <label>Enter UserPassword:</label>
                <input type="password"
                onChange={handleChange}
                name="userPass"
                value={userData.userPass}
                placeholder="Enter password..."/>
                <br></br>

                <input type="submit" value={"Register"}/>

            </form>
        </div>
    </div>
  )
}

export default RegistrationForm