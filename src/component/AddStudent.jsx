import React, { useState } from "react";
import "../css/student.css";
import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const AddStudent = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const [grade, setGrade] = useState("");
  const [roll, setRoll] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/student/register`, {
        username,
        password,
        roll,
        grade,
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((res) => {
        toast.success("Student Register SuccessFully");
        if (res.data.message) {
          navigate("/dashboard");
        }
        
      })

      .catch((err) => {
        console.log("err>>>", err);
        toast.error("Wrong Password");
      });
  };

  return (
    <>
      <div className="student-form-container">
        <form className="student-form-" onSubmit={handleSubmit}>
          <h2 className="a-2">Add Student</h2>
          <div className="form-group">
            <label htmlFor="roll" className="label1">
              Roll No
            </label>
            <input
              type="text"
              id="roll"
              name="roll"
              placeholder="Enter Your Roll Num"
              onChange={(e) => setRoll(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="username" className="label1">
              User Name
            </label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Enter Your User Name "
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="grade" className="label1">
              Grade
            </label>
            <input
              type="text"
              id="grade"
              name="grade"
              placeholder="Enter Your Grade"
              onChange={(e) => setGrade(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="label1">
              password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-1" onClick={handleSubmit}>
            Register
          </button>
        </form>
      </div>
    </>
  );
};

export default AddStudent;
