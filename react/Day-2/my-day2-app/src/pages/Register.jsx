
import { useNavigate } from "react-router-dom"


const Register = () => {
    const navigate=useNavigate()
    const Hee=()=>{
        navigate("/")
    }
  return (
    <>
    <div className=" min-h-screen bg-gradient-to-r from-blue-400 to-red-500 flex justify-center items-center">
        <button className="absolute top-6 left-7 bg-black px-5 py-5 text-white rounded-2xl" onClick={Hee}>
            Back
        </button>
        <div className="w-96 p-8 rounded-2xl shadow-2xl bg-red-200">
            <h1 className="text-3xl font-bold text-center mb-6">
                Registration
            </h1>
            <form>
                <div>
                    <label className="block font-semibold mb-2">User Name:</label>
                    <input type="text" placeholder="Enter User Name.." className="w-full border border-gray-700 rounded-lg px-4 py-3 "/>
                    <label className="block font-semibold mb-2 mt-3">Email:</label>
                    <input type="text" placeholder="Enter User Name.." className="w-full border border-gray-700 rounded-lg px-4 py-3 mt-1"/>
                    <label className="block font-semibold mb-2 mt-3">Password:</label>
                    <input type="text" placeholder="Enter User Name.." className="w-full border border-gray-700 rounded-lg px-4 py-3 mt-1"/>
                    <button
                    className="block font-semibold mb-2 bg-gradient-to-r from-blue-500 to-red-500 px-4 py-5 mt-4 rounded-2xl">Create Account</button>
                </div>
            </form>
        </div>

    </div>
    </>
  )
}

export default Register