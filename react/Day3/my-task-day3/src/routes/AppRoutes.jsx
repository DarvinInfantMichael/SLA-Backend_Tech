import Layout from "../components/Layout"
import Home from "../pages/Home"
import About from "../pages/About"
import Projects from "../pages/Projects"
import Services from "../pages/Services"
import Contact from "../pages/Contact"
import {Routes,Route} from 'react-router-dom'

const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route element ={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/contact" element={<Contact/>}/>

        </Route>
    </Routes>
    </>
  )
}

export default AppRoutes