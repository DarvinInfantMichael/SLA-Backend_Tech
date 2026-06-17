import { Link} from "react-router-dom";


const Navbar = () => {

  
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

      
    </>
  );
};

export default Navbar;