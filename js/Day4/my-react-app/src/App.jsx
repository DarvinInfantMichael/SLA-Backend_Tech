import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import LearningResource from "./pages/LearningResource";

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About/>}/>
        <Route
          path="/learning-resource"
          element={<LearningResource />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;