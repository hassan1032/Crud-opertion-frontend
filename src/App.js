import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import Books from "./component/Books";
import Login from "./component/Login";
import Dashborad from "./component/Dashborad";
import { Toaster } from "react-hot-toast";
import AddStudent from "./component/AddStudent";
import Logout from "./component/Logout";
import axios from "axios";
import Cookies from "js-cookie";
import AddBook from "./component/AddBook";
import EditBook from "./component/EditBook";
import DeleteBook from "./component/DeleteBook";


function App() {
  const [role, setRole] = useState("");
  const token = Cookies.get("token");
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios
      .get("http://localhost:4000/auth/verify", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        if (res.data.login) {
          setRole(res.data.role);
        
        } else {
          setRole("");
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            fontSize: "20px",
          },
          duration: 3000,
          minWidth: "250px",
        }}
      />
      <BrowserRouter>
        <Navbar role={role} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/books" element={<Books />} />
          <Route path="/login" element={<Login setRoles={setRole} />} />
          <Route path="/dashboard" element={<Dashborad />} />
          <Route path="/addstudent" element={<AddStudent />} />
          <Route path="/logout" element={<Logout setRoles={setRole} />} />
          <Route path="/addbook" element={<AddBook/>} />
          <Route path="/book/:id" element={<EditBook/>} />
          <Route path="/delete/:id" element={<DeleteBook/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
