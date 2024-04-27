import { BrowserRouter, Routes,Route } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Books from "./component/Books";
import Login from "./component/Login";

function App() {
  return (
   <BrowserRouter>
   <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/books" element={<Books/>}/>
    <Route path="/login" element={<Login/>}/>
    
    


    
    
    
    
    
    
    

    
    
    
    
    


   </Routes>
   </BrowserRouter>
 
  );
}

export default App;
