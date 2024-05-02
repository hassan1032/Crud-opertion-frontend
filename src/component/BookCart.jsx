import React from "react";
import "../css/Books.css";
import { Link } from "react-router-dom";

const BookCart = ({ book }) => {
  const { name, author, imageUrl } = book;
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
            <button className="btn"><Link to={'/book/${book._id}'}>Edit</Link></button>
            <button className="btn">Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCart;