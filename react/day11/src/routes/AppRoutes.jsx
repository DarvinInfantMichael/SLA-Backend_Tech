import LoginForm from "../components/LoginForm"
import RegistrationForm from "../components/RegistrationForm"
import DashBoard from "../components/DashBoard"
import { Route, Routes } from "react-router-dom"

const AppRoutes = () => {
  return (
    <>
    <Routes>
        
        <Route path="/" element={<RegistrationForm/>}></Route>
        <Route path="/login" element={<LoginForm/>}></Route>
        <Route path="/dashboard" element={<DashBoard/>}></Route>

    </Routes>
    
   
    </>
  )
}

export default AppRoutes