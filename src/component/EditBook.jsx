import React, { useEffect, useState } from "react";
import "../css/student.css";
import axios from "axios";
import toast from "react-hot-toast";
import Cookies from "js-cookie";
import { useNavigate, useParams } from "react-router-dom";

const AddStudent = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const { id} = useParams()

  useEffect(() => {
    axios.get (`http://localhost:4000/book/book/${id}`)
    .then((res)=>{
        setName(res.data.name)
        setAuthor(res.data.author)
        setImageUrl(res.data.ImageUrl)
       
    })
    .catch((err) => {
      console.log("err>>>", err);
    });
  }, []);


  const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .put(`http://localhost:4000/book/book/${id}`, {
      name,
      author,
      imageUrl,
      
    },{headers: {
      'Authorization': `${token}`,
    }})
      .then((res) => {
       
        toast.success("Edit Book  SuccessFully");
          navigate("/books");
        
       
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
          <h2 className="a-2">Edit Book </h2>
          <div className="form-group">
            <label htmlFor="author" className="label1">
              Author Name
            </label>
            <input
              type="text"
              value={author}
              id="author"
              name="author"
              placeholder="Enter Your Author Name"
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="book" className="label1">
              Book Name
            </label>
            <input
              type="text"
              value={name}
              id="book"
              name="book"
              placeholder="Enter Your Book Name"
              onChange={(e) => setName(e.target.value)}
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
              value={imageUrl}
              placeholder="Enter Image Url"
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-1" onClick={handleSubmit}>
            Update
          </button>
        </form>
      </div>
    </>
  );
};

export default AddStudent;
