import { useState } from "react"
import { useNavigate } from "react-router-dom";


const LoginForm = () => {

    const nav = useNavigate();

    const[userData,setUserData]=useState({userEmail:"",userPass:""});
    const[dbdata,setDbdata]=useState([]);

    const handleChange =(e)=>{

        setUserData ({...userData,[e.target.name]:e.target.value});

    }

    const handleClick =(e)=>{

        e.preventDefault();

        const res=JSON.parse(localStorage.getItem("Items"));

        const auth=res.find((e)=>e.userEmail ===userData.userEmail && e.userPass===userData.userPass)

        if(!auth){
            alert("User Not Found.")
            return
        }
        // res.push(userData);

        localStorage.setItem("auth2",JSON.stringify(auth));
        // setDbdata(res);

        setUserData({userEmail:"",userPass:""});

        nav("/dashboard");
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

                {/* <label>Enter UserName:</label>
                <input type="text"
                onChange={handleChange}
                name="userName"
                value={userData.userName}
                placeholder="Enter Name..."/>
                <br></br> */}

                <label>Enter UserEmail:</label>
                <input type="email"
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

                <input type="submit" value={"Login"}/>

            </form>
        </div>
    </div>
  )
}

export default LoginForm