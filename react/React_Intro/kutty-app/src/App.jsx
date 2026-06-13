import { FaSearch } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { FaApple } from "react-icons/fa";
import reactlogo from "./assets/React-js.png";
import jslogo from "./assets/learn_javascript_on_mac.webp";

function  App  ()  {
  return (
    <div className="min-h-screen bg-green-200 flex flex-col">
        <div className="flex items-center justify-between bg-white shadow-md px-6 py-4"> 
            <div>
                <FaApple className="text-2xl"/>
                <h2 className="text-xl font-bold text-green-700">My App</h2></div>
            <div className="flex items-center bg-green-200 px-3 py-2 rounded-full w-80 gap-2">
                <FaSearch/>
                <input
                type="text"
                placeholder=" Search......"
                className="w-full bg-amber-100 outline-1 text-sm rounded-2xl"
                />
            </div>
            <div className="flex items-center gap-5 text-2xl">
                <FaHome className="hover:text-green-600 cursor-pointer"/>
                <FaCartArrowDown className="hover:text-green-600 cursor-pointer"/>
                <VscAccount className="hover:text-green-600 cursor-pointer"/>
            </div>
        </div>
        {/* Page COntents..... */}
        <div className="flex items-center justify-center mt-10  gap-7">
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-green-600 ">
                Previous..
            </button>
                <div className="text-center bg-white p-10 rounded-2xl shadow-2g">
                    <h2 className="text-2xl font-bold text-gray-800">Hello I am Dim..</h2>
                    <p className="mt-3 text-gray-800">
                        Glad to see Guys ..
                    </p>
                </div>
            <button className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-green-600">
                Next..
            </button>
        </div>
        <div className="flex justify-center gap-6 flex-wrap p-8">

  {/* Card 1 */}
  <div className="w-80 bg-white border-2 rounded-lg shadow-lg p-4">
    <img
      src={reactlogo}
      alt="React Course"
      className="w-full h-40 object-cover rounded-2xl"
    />

    <h2 className="text-xl font-bold mt-3">
      React JS Master Course
    </h2>

    <p className="text-gray-600 mt-2">
      Learn React from beginner to advanced with real-world projects.
    </p>

    <div className="mt-3">
      <span className="text-2xl font-bold text-green-600">₹999</span>
      <span className="ml-2 text-gray-500 line-through">₹2999</span>
    </div>

    <div className="inline-block bg-red-500 text-white px-3 py-1 rounded mt-2">
      67% OFF
    </div>

    <button className="w-full bg-red-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700">
      Register Now
    </button>
  </div>

  {/* Card 2 */}
  <div className="w-80 bg-white border-2 rounded-2xl p-4 shadow-2xl">
    <img
      src={jslogo}
      alt="Logo of Course"
      className="w-full h-40 object-cover rounded-2xl border-2"
    />

    <h2 className="text-xl font-bold mt-3">
      Introduction to JS
    </h2>

    <p className="text-gray-500 mt-2">
      Mastering JS with strong foundations.
    </p>

    <div className="mt-2">
      <span className="text-2xl text-green-600 font-bold">
        ₹999
      </span>
      <span className="text-xl text-gray-400 line-through ml-3">
        ₹2999
      </span>
    </div>

    <div className="bg-red-500 text-white rounded px-3 py-1 mt-2 inline-block">
      Get 70% Off
    </div>

    <button className="w-full bg-red-600 text-white py-2 rounded-lg mt-4 hover:bg-green-500">
      Enroll Now!
    </button>
  </div>

</div>
    </div>
  )
}

export default App