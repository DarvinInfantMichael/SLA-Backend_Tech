import {Link} from "react-router-dom";

const Navbar = () => {
  return (<>
    <div className="bg-green-300 flex justify-between px-8 py-4">

        <Logo/>
        <Links/>
    </div>
    <div className="bg-blue-400 h-screen">
        <Hero/>
    </div>
    </>
  );
};

export default Navbar;



const Logo = () => {
  return (
    <div className="w-20 h-15 rounded-2xl flex justify-center ">
        <img src="/public/hh.png" alt="Logo"/>
    </div>
  )
}

const Links = () =>{
    return(
        <div className="flex gap-8 text-lg font-semibold">
      <Link to="/"
      className="nav-link">Home</Link>
      <Link to="/about"
      className="nav-link">About</Link>
      <Link to="/projects"
      className="nav-link">Projects</Link>
      <Link to="/contact"
      className="nav-link">Contact</Link>
    </div>
    )
}

const Hero =()=>{
    return(
        <div className="flex justify-center">
            <img src="/public/rr.png" className="w-200 h-100 px-10 py-3"/>
        </div>
    )
}


