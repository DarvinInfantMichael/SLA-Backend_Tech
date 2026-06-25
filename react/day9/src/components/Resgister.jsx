import Showing from "../components/Showing"


import { useState } from "react"

const Resgister = () => {
    

    const[userData,setUserData]=useState({userName:"",userAge:"",userCity:""})
    const[save,setSave]=useState([])

const handleChange =(e)=>{
setUserData({...userData,[e.target.name]:e.target.value})
}

const handleSubmit=(e)=>{
    e.preventDefault();

    setSave([...save,userData])

    setUserData({userName:"",userAge:"",userCity:""})
}

const[editIndex,setEditIndex]=useState(-1)
 const handleDelete = (index) => {
    setSave(save.filter((_, i) => i !== index));
  };

  const handleEdit = (index) => {
    setUserData(save[index]);
    setEditIndex(index);
  };



  return (
    <>
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <h1>Regisration From:</h1>
                    <p>Register your self</p>
                </div>
                <table>
                    <tr>

                        <td><label htmlFor="">Enter the Name :</label></td>
                        <td><input type="text" className="border-2 mx-3" name="userName" value={userData.userName} onChange={handleChange}/></td>
                    </tr>
                    <br>
                    </br>
                    <tr>

                        <td><label htmlFor="">Enter the Age :</label></td>
                        <td><input type="number" className="border-2 mx-3" name="userAge" value={userData.userAge} onChange={handleChange}/></td>
                    </tr>
                    <br>
                    </br>
                    <tr>

                        <td><label htmlFor="">Enter the City :</label></td>
                        <td><input type="text" className="border-2 mx-3" name="userCity" value={userData.userCity} onChange={handleChange}/></td>
                    </tr>
                    <br></br>

                    <tr>
                        <td>
                            <input type="submit" value={"Register"}/>
                        </td>
                    </tr>
                </table>
            </div>
        </form>
    </div>
    <div>
        <Showing datas={save}
        handleDelete={handleDelete}
        handleEdit={handleEdit}/>
    </div>
</>
  )
}

export default Resgister