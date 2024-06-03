import React from "react";
import "./singleMovie.css";
import Video from "../../components/Video/Video";
import CastCard from "../../components/CastCard/CastCard";

const SingleMovie = () => {
  return (
    <div className="px-5 py-5 main-movie-container">
      <h3 className="title">Deadpool & Wolverine</h3>
      <hr className="mt-0 mb-5" />
      <div className="movie-container d-flex justify-content-between gap-30">
        <div className="left-part">
          <Video videoId="73_1biulkYk" />
          <h3 className="mt-5 mb-0 text-uppercase">Overview</h3>
          <hr className="mt-1" />
          <span className="text-wrap">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
            atque a ad quos neque aliquam incidunt modi aliquid dolorum nemo
            optio, doloribus cumque, quia ut alias reprehenderit earum. Sequi
            ratione distinctio et rerum alias, facere id quod, molestias non,
            minima ipsa sapiente saepe harum tempore quis magni minus veniam
            iste.
          </span>
        </div>
        <div className="right-part d-flex  justify-content-center">
          <div className="movie-details align-items-start d-flex flex-column gap-10">
            <strong>
              <p className="mb-0">Director: </p>
            </strong>
            <p className="mb-3">Phyllida Lloyd</p>

            <strong>
              <p className="mb-0">Writer: </p>
            </strong>
            <p className="mb-3">Abi Morgan</p>

            <strong>
              <p className="mb-0">Release Date: </p>
            </strong>
            <p className="mb-3">2011-12-26</p>

            <strong>
              <p className="mb-0">Run Time:</p>
            </strong>
            <p className="mb-3">105m</p>

            <strong>
              <p className="mb-0">Run Time:</p>
            </strong>
            <p className="mb-3">105m</p>

            <strong>
              <p className="mb-0">Tagline: </p>
            </strong>
            <p className="mb-3">Never Compromise.</p>
          </div>
        </div>
      </div>
      <div className="cast">
        <h3 className="title mt-5">CAST</h3>
        <hr className="mt-1 mb-4" />
        <div className="d-flex flex-wrap gap-20">
          <CastCard />
          <CastCard />
          <CastCard />
          <CastCard />
          <CastCard />
          <CastCard />
        </div>
      </div>
    </div>
  );
};

export default SingleMovie;
