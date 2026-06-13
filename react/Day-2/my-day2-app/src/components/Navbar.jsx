import { Link, useNavigate } from "react-router-dom"


const Navbar = () => {

  const navigate=useNavigate();
  const Handled =()=>{
    navigate("/login");
  }

  const Remote=()=>{
    navigate("/register")
  }
  return (
    <>
    <div className="bg-gradient-to-r from-green-400 to-cyan-500 flex justify-between items-center px-10 py-4 p-8">

          <Logo />
          <Links Handled={Handled} Remote={Remote}/>
      </div>
    </>
  )
}

export default Navbar

const Logo = () => {
  return (
    <div className="w-19 h-19">
      <img src="/public/ChatGPT Image Jun 14, 2026, 12_52_55 AM.png" alt="logo" className="rounded-2xl"/>
    </div>
  )
}

const Links = ({Handled,Remote}) => {
  return (
    <div className="flex gap-5 ">
      <Link to="/"
      className="bg-gradient-to-r from-green-200 to-green-500  text-black 0 px-3 py-4 flex items-center rounded-2xl">Home</Link>
      <Link to="/about"
      className="bg-gradient-to-r from-green-200 to-green-500  text-black px-3 py-4 flex items-center rounded-2xl">About</Link>
      <Link to="/projects"
      className="bg-gradient-to-r from-green-200 to-green-500  text-black px-3 py-4 flex items-center rounded-2xl">Projects</Link>
      <Link to="/contact"
      className="bg-gradient-to-r from-green-200 to-green-500  text-black px-3 py-4 flex items-center rounded-2xl">Contact</Link>
      <button
      className="bg-gradient-to-r from-red-400 to-red-600  text-black px-3 py-4 flex items-center rounded-2xl "onClick={Handled}>Login</button>

      <button
      className="bg-gradient-to-r from-yellow-200 to-yellow-600 px-3 py-4 flex items-center rounded-2xl"
      onClick={Remote}>Register</button>
    </div>
  )
}

