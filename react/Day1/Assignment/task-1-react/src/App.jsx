import CompanyInfo from "./Components/CompanyInfo";
import EmployeeCard from "./Components/EmployeeCard";
import MovieDetails from "./Components/MovieDetails";
import Navbar from "./Components/Navbar";
import ProductCard from "./Components/ProductCard";
import StudentProfile from "./Components/StudentProfile";
import Footer from "./Components/Footer";


const App= ()=>{
  return(<>
    <div>
      <Navbar/>
      <StudentProfile/>
      <EmployeeCard/>
      <ProductCard/>
      <MovieDetails/>
      <CompanyInfo/>
      <Footer/>
    </div>
  </>)
}
export default App;