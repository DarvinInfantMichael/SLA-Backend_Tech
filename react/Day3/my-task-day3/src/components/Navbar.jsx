import { Link,useNavigate} from "react-router-dom";


const Navbar = () => {

  const navigate =useNavigate();
  const Hee =()=>{
    navigate("/projects")
  }
  return (
    <>
      <nav className="bg-blue-600 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          {/* Logo */}
          <div>
            <img
              src="./hh.png"
              alt="Logo"
              className="w-16 h-12 object-contain"
            />
          </div>

          {/* Navigation Links */}
          <div className="flex gap-6">
            <Link
              to="/"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Home
            </Link>

            <Link
              to="/about"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              About
            </Link>

            <Link
              to="/projects"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Projects
            </Link>

            <Link
              to="/services"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Services
            </Link>

            <Link
              to="/contact"
              className="text-white hover:text-yellow-300 transition duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-cyan-700 to-blue-500 min-h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <h1 className="text-6xl font-bold mb-4">
            Welcome to Tasks Page !
          </h1>

          <p className="text-xl max-w-2xl mx-auto">
           Here is day to day Activities are Process and Implements
          </p>

          <button className="mt-8 px-8 py-3 bg-orange-500 rounded-lg hover:bg-orange-600 transition" onClick={Hee}>
            Get Started
          </button>
        </div>
      </section>
    </>
  );
};

export default Navbar;