import React from "react";
import "./movieCard.css";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  return (
    <Link to="/movie/:id">
      <div className="card-container">
        <div
          className="img-div"
          style={{ height: props.height, width: props.width }}
        >
          <img
            src="/card.webp"
            alt="alt-img"
            width="100%"
            style={{ objectFit: "contain" }}
          />
        </div>
        <div className="details">
          <div className="tags"></div>
          <h3 className="title">Iron Man</h3>
          <p className="ratings">5/10</p>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
