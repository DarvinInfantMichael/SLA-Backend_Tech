const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-950 to-cyan-600 flex justify-center px-6">

      <div className="max-w-4xl text-center mt-5 ">

        <img src="/public/iiii.png" alt="Home_img" className="rounded-2xl"/>

        <h2 className="text-2xl md:text-3xl text-white font-medium mb-2 mt-4">
          Welcome to
        </h2>

        <h1 className="text-6xl md:text-7xl font-extrabold text-white mb-6 hover:text-red-300 hover:tracking-wide">
          DIM Developer
        </h1>

        <p className="text-2xl text-gray-100 font-semibold mb-4  hover:text-orange-300 hover:tracking-wide">
          Building Modern Websites & Powerful Web Applications
        </p>

        <p className="text-lg text-gray-200 leading-8 mb-8 hover:text-orange-300 hover:tracking-wide">
          At <span className="font-bold text-amber-500">DIM Developer</span>, we specialize in
          creating modern, responsive, and scalable websites that help
          businesses establish a strong online presence. From stunning UI/UX
          designs to full-stack web applications, we transform your ideas into
          innovative digital solutions.
        </p>

      </div>

    </div>
  );
};

export default Home;