import { useNavigate } from "react-router-dom"

const Login = () => {
  const navigate=useNavigate();
  const Hai =()=>{
    navigate("/");
  }
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-green-400 to-cyan-500">
      <button 
      className="absolute top-6 left-6 bg-black text-white px-6 py-5 flex items-center rounded-2xl" onClick={Hai}>Back</button>
      <div className="bg-gradient-to-r from-blue-400 to-orange-500 w-96 p-8 rounded-2xl shadow-2xl">

        <h1 className="text-3xl font-bold text-center mb-6">
          Login
        </h1>

        <form className="space-y-5">

          <div>
            <label className="block font-semibold mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-cyan-500 text-white py-3 rounded-lg font-semibold hover:from-green-600 hover:to-cyan-600 transition-all duration-300"
          >
            Login
          </button>

        </form>

        <p className="text-center mt-6">
          Don't have an account?{" "}
          <span className="text-blue-600 cursor-pointer hover:underline">
            Register
          </span>
        </p>

      </div>
    </div>
  )
}

export default Login