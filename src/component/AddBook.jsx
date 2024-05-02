import React, { useState } from "react";
import "../css/student.css";
import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const token = Cookies.get("token");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4000/book/add`, {
        name,
        author,
        imageUrl,
        
      },{headers: {
        'Authorization': `${token}`,
      }})

      .then((res) => {
    
        toast.success("Book Added Successfully");
     
            navigate('/books')
        
        console.log("Add book response:", res);
      })
      .catch((err) => {
        console.log("err>>>", err);
        toast.error("Error occurred while adding book");
      });
  };

  return (
    <>
      <div className="student-form-container">
        <form className="student-form-" onSubmit={handleSubmit}>
          <h2 className="a-2">Add Book</h2>
          <div className="form-group">
            <label htmlFor="book" className="label1">
              Book Name
            </label>
            <input
              type="text"
              id="book"
              name="book"
              placeholder="Enter Book Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="author" className="label1">
              Author Name
            </label>
            <input
              type="text"
              id="author"
              name="author"
              placeholder="Enter Author Name"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="image" className="label1">
              Image
            </label>
            <input
              type="text"
              id="images"
              name="images"
              placeholder="Enter Image Url"
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-1">
            Add
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBook;
