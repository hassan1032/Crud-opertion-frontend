import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Books from "./component/Books";
import Login from "./component/Login";
import Dashborad from "./component/Dashborad";
import  { Toaster } from 'react-hot-toast';
import AddStudent from "./component/AddStudent";
function App() {
  return (
    <>

    <Toaster
    position="top-center"
      reverseOrder={false}
      toastOptions={{
        style: {
          fontSize: '15px',
        },
        duration: 4000,
        minWidth: '250px',
      }}


    />
      <BrowserRouter>
       
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashborad />} />
          <Route path="/addstudent" element={<AddStudent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
