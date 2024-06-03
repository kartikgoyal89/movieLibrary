import React from "react";
import "./castCard.css";
import { Link } from "react-router-dom";

const CastCard = () => {
  return (
    <Link to="/cast/:id">
      <div className="d-flex flex-column align-items-center justify-content-between">
        <div
          className="img-div"
          style={{
            border: "1px solid #888",
            padding: "15px",
            borderRadius: "5px",
          }}
        >
          <img
            src="/cast.jpeg"
            alt=""
            width="200px"
            height="200px"
            style={{ objectFit: "contain" }}
          />
          <h5 style={{ textAlign: "center" }}>Dwayne Johnson</h5>
        </div>
      </div>
    </Link>
  );
};

export default CastCard;
