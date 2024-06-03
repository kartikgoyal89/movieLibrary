import React from "react";
import "./wishlist.css";
import MovieCard from "../../components/MovieCard/MovieCard";
import { RxCross2 } from "react-icons/rx";

const Wishlist = () => {
  return (
    <div className="wishlist-container d-flex gap-20 p-5 justify-content-start flex-wrap">
      <div className="position-relative">
        <MovieCard height={"200px"} width={"200px"} className="me-5 pe-5" />
        <button
          className="position-absolute bg-transparent color-white border-0"
          style={{ top: "-35px", right: "0px", fontSize: "30px" }}
        >
          <RxCross2 />
        </button>
      </div>
      <div className="position-relative">
        <MovieCard height={"200px"} width={"200px"} className="me-5 pe-5" />
        <button
          className="position-absolute bg-transparent color-white border-0"
          style={{ top: "-35px", right: "0px", fontSize: "30px" }}
        >
          <RxCross2 />
        </button>
      </div>
      <div className="position-relative">
        <MovieCard height={"200px"} width={"200px"} className="me-5 pe-5" />
        <button
          className="position-absolute bg-transparent color-white border-0"
          style={{ top: "-35px", right: "0px", fontSize: "30px" }}
        >
          <RxCross2 />
        </button>
      </div>
      <div className="position-relative">
        <MovieCard height={"200px"} width={"200px"} className="me-5 pe-5" />
        <button
          className="position-absolute bg-transparent color-white border-0"
          style={{ top: "-35px", right: "0px", fontSize: "30px" }}
        >
          <RxCross2 />
        </button>
      </div>
      <div className="position-relative">
        <MovieCard height={"200px"} width={"200px"} className="me-5 pe-5" />
        <button
          className="position-absolute bg-transparent color-white border-0"
          style={{ top: "-35px", right: "0px", fontSize: "30px" }}
        >
          <RxCross2 />
        </button>
      </div>
    </div>
  );
};

export default Wishlist;
