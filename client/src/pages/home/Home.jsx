import React from "react";
import "./home.css";
import Slider from "react-slick";
import MovieCard from "../../components/MovieCard/MovieCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Video from "../../components/Video/Video";
import { Link } from "react-router-dom";

const settings1 = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  responsive: [
    {
      breakpoint: 926,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 836,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 586,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};

const settings2 = {
  dots: true,
  infinite: true,
  speed: 1200,
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: false,
  responsive: [
    {
      breakpoint: 1115,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 836,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 586,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};

const Home = () => {
  return (
    <div className="main-container">
      <div className="px-5 pt-3">
        <div className="row py-5 home-wrapper w-100 d-flex align-items-center justify-content-center">
          <Slider {...settings1}>
            <div className="item p-2 px-3 mx-2">
              <MovieCard height={"350px"} width={"350px"} />
            </div>
            <div className="item p-2 px-3 mx-2">
              <MovieCard height={"350px"} width={"350px"} />
            </div>
            <div className="item p-2 px-3 mx-2 ">
              <MovieCard height={"350px"} width={"350px"} />
            </div>
            <div className="item p-2 px-3 mx-2 ">
              <MovieCard height={"350px"} width={"350px"} />
            </div>
            <div className="item p-2 px-3 mx-2 ">
              <MovieCard height={"350px"} width={"350px"} />
            </div>
            <div className="item p-2 px-3 mx-2 ">
              <MovieCard height={"350px"} width={"350px"} />
            </div>
            <div className="item p-2 px-3 mx-2 ">
              <MovieCard height={"350px"} width={"350px"} />
            </div>
            <div className="item p-2 px-3 mx-2 ">
              <MovieCard height={"350px"} width={"350px"} />
            </div>
          </Slider>
        </div>
      </div>

      <div className="home-wrapper-2">
        <h3>IN GENRES</h3>
        <div className="genres-list d-flex gap-10 flex-wrap">
          <p className="mb-0">#All</p>
          <p className="mb-0">#Action</p>
          <p className="mb-0">#Action-adventure</p>
          <p className="mb-0">#Animation</p>
          <p className="mb-0">#History</p>
          <p className="mb-0">#Horror</p>
          <p className="mb-0">#Comedy</p>
        </div>
        <Slider {...settings2} className="py-3">
          <div className="item px-4">
            <MovieCard height={"230px"} width={"255px"} />
          </div>
          <div className="item px-4">
            <MovieCard height={"230px"} width={"255px"} />
          </div>
          <div className="item px-4">
            <MovieCard height={"230px"} width={"255px"} />
          </div>
          <div className="item px-4">
            <MovieCard height={"230px"} width={"255px"} />
          </div>
          <div className="item px-4">
            <MovieCard height={"230px"} width={"255px"} />
          </div>
          <div className="item px-4">
            <MovieCard height={"230px"} width={"255px"} />
          </div>
          <div className="item px-4">
            <MovieCard height={"230px"} width={"255px"} />
          </div>
          <div className="item px-4">
            <MovieCard height={"230px"} width={"255px"} />
          </div>
          <div className="item px-4">
            <MovieCard height={"230px"} width={"255px"} />
          </div>
          <div className="item px-4">
            <MovieCard height={"230px"} width={"255px"} />
          </div>
          <div className="item px-4">
            <MovieCard height={"230px"} width={"255px"} />
          </div>
          <div className="item px-4">
            <MovieCard height={"230px"} width={"255px"} />
          </div>
        </Slider>
      </div>

      <div className="home-wrapper-3 px-5 py-3">
        <h3 className="title mb-3">IN THEATRES</h3>
        <Video videoId="73_1biulkYk" />
      </div>

      <div className="home-wrapper-4 px-5 py-4 d-flex justify-content-between">
        <div className="div-left">
          <h3 className="title mb-4">LATEST NEWS</h3>
          <div className="news-card mb-5">
            <strong>
              <p className="mb-0">
                Benaughty shall be various other regional casual dating
                situation on line
              </p>
            </strong>
            <p>2 years ago</p>
            <span>
              Benaughty shall be various other regional casual dating situation
              on line Bens having cell phones and machines, and you can
              blackberrys. It online dating web site will allow
            </span>
          </div>
          <div className="news-card">
            <strong>
              <p className="mb-0">
                Benaughty shall be various other regional casual dating
                situation on line
              </p>
            </strong>
            <p>2 years ago</p>
            <span>
              Benaughty shall be various other regional casual dating situation
              on line Bens having cell phones and machines, and you can
              blackberrys. It online dating web site will allow
            </span>
          </div>
        </div>
        <div className="div-right">
          <h3 className="title mb-0 fs-5">SPOTLIGHT CELEBRITIES</h3>
          <hr className="mb-4" />
          <div className="d-flex flex-column gap-10 align-items-center justify-content-between">
            <div className="celeb-card mb-4 d-flex align-items-center justify-content-between">
              <img
                src="../../../public/card.webp"
                width="120px"
                height="120px"
                style={{ objectFit: "contain" }}
                alt=""
              />
              <strong>
                <Link to="/cast/:id">
                  <p className="celeb-name">Abby Ryder Fortson</p>
                </Link>
              </strong>
            </div>

            <div className="celeb-card mb-4 d-flex align-items-center justify-content-around">
              <img
                src="../../../public/card.webp"
                width="120px"
                height="120px"
                style={{ objectFit: "contain" }}
                alt=""
              />
              <strong>
                <Link to="/cast/:id">
                  <p className="celeb-name">Abby Ryder Fortson</p>
                </Link>
              </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
