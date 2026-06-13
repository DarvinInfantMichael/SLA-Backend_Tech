import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-blue-200 p-5 flex justify-between w-full">
        <Logo/>
        <CompanyName/>
        <Links/>
    </div>
  )
}

export default Navbar


const Logo=()=>{
    return(
        <div className="w-15 h-15 flex justify-center">
            <img className="rounded-2xl" src="../../public/img3.avif"/>
        </div>
    )
}

const CompanyName=()=>{
    return(
        <>
        <h1 className="font-bold  text-2xl text-center ml-50 bg-blue-300 w-fit  p-3 rounded-4xl border-2">SoftLogic </h1>
        </>
    )
}

const Links=()=>{
    return(
        <div className="flex gap-8">
            <Link
            className="bg-gradient-to-r from-pink-500 to-orange-500 px-4 py-4 rounded-2xl shadow-md text-white">Home</Link>
            <Link
            className="bg-gradient-to-r from-pink-500 to-orange-500 px-4 py-4 rounded-2xl shadow-md text-white">About</Link>
            <Link
            className="bg-gradient-to-r from-pink-500 to-orange-500 px-4 py-4 rounded-2xl shadow-md text-white">Projects</Link>
            <Link
            className="bg-gradient-to-r from-pink-500 to-orange-500 px-4 py-4 rounded-2xl shadow-md text-white">Contact</Link>
        </div>
    )
}