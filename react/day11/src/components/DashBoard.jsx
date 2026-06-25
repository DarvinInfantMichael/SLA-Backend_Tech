import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

const DashBoard = () => {

    const nav=useNavigate();

    const [userdata,setUserdata]=useState({});
    const res=JSON.parse(localStorage.getItem("auth2"));


    if(!userdata.userName){
            nav("/login")
        }

        
    useEffect(()=>{
        const data =()=>{
        setUserdata(res)

        
    }
    data()
    },[])

    const logout=()=>{
        localStorage.removeItem("auth2")

        nav("/login")
    }


  return (
    <div>
        <div>
            <h1> User DashBoard</h1>
            <h2>{userdata.userName}</h2>
            <h2>
                {userdata.userEmail}
            </h2>
            <button onClick={logout}>Logout</button>
        </div>
    </div>
  )
}

export default DashBoard