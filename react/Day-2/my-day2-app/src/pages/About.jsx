

const About = () => {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-900 to-cyan-500 ">
   <div className="flex flex-col md:flex-row items-center gap-12 py-20">

  <img
    src="../../public/soft.png"
    alt="Software Development"
    className="w-full md:w-1/2 rounded-2xl shadow-2xl "
  />

  <div className="md:w-1/2">
    <h2 className="text-4xl font-bold text-cyan-300 mb-5">
      Custom Software Development
    </h2>

    <p className="text-gray-300 leading-8">
      We design and develop powerful custom software solutions that simplify
      business operations and improve productivity. Our applications are built
      with modern technologies, ensuring high performance, security, and
      scalability. Whether you're a startup or an enterprise, we create
      software tailored to your unique business requirements.
    </p>
  </div>

</div>
</div>
</>
  )
}

export default About