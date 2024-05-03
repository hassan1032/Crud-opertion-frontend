import React from "react";
import "../css/Books.css";
import { Link } from "react-router-dom";
import axios from "axios";

const BookCart = ({ book }) => {
  const { name, author, imageUrl } = book;

  const deleteItem = (id)=>{
    console.log("id",id);
    axios.delete(`http://localhost:4000/book/book/${id}`).then((res)=>{
      console.log(res);
      window.location.reload();
    }).catch((err)=>{
      console.log(err);
    })
    
      }

  return (
    <div className="book-card">
      <div class="card" style={{ width: "18rem" }}>
        {" "}
        <img src={imageUrl} alt={name} className="images" />
        <div class="card-body">
          <div className="book-details">
            <h3 className="book-name">{name}</h3>
            <p className="book-author">{author}</p>
          </div>{" "}
          <div className="book-actions">
            <button className="btn-1">
              <Link to={`/book/${book._id}`}>Edit</Link>
            </button>
            <button className="btn-1" onClick={()=>deleteItem(book._id)}>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCart;
