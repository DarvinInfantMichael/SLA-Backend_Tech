import { useNavigate } from "react-router-dom";
export const Home = () => {
    const navigate =useNavigate();
  const Hee =()=>{
    navigate("/projects")
  }
  return (
    <>
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
  )
}
 export default Home;