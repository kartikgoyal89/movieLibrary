import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import { MdOutlineCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./header.css";

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [menu, setMenu] = useState(true);
  const [menuNew, setMenuNew] = useState("closed");

  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container-xxl">
          <div className="row px-3">
            <div className="col-6 shipping">
              <p className="text-white mb-0">New Offers are coming soon...</p>
            </div>
            {/* <div className="col-6">
              <p className="text-end text-white mb-0 hotline">
                Hotline:{" "}
                <a href="tel: +91 1234567890" className="text-white">
                  (+91) 1234567890
                </a>
              </p>
            </div> */}
          </div>
        </div>
      </header>
      <header className="header-upper py-3">
        <div className="container-xxl">
          <h2 className="digitic">
            <Link className="text-white logo px-4">
              <IoMdMenu
                className="responsive-menu me-2"
                onClick={() => setMenuNew("open")}
              />
              <Link to="/" className="text-white">
                BLOCKTER
              </Link>
            </Link>
          </h2>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control py-2"
              placeholder="Search Movie here..."
              aria-label="Search Movie here..."
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text" id="basic-addon2">
              <GoSearch className="search-icon fs-5" />
            </span>
          </div>

          <div className="side-logo d-flex align-items-center justify-content-between">
            <div>
              <Link
                to="/wishlist"
                className="d-flex align-items-center text-white gap-10 icon-div"
              >
                <FaRegHeart className="icon" />
                <p>
                  Favourite <br />
                  Wishlist
                </p>
              </Link>
            </div>
            <div>
              <Link
                to="/login"
                className="d-flex align-items-center text-white gap-10 icon-div"
              >
                <FaRegUser className="icon" />
                <p>
                  Log In <br />
                  My Account
                </p>
              </Link>
            </div>
          </div>
        </div>
      </header>
      <Sidebar menuNew={menuNew} crossClicked={() => setMenuNew("closed")} />
      <header className="header-bottom responsive-search py-2">
        <div className="responsive-search-container py-3 px-5">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control py-2"
              placeholder="Search Movie here..."
              aria-label="Search Movie here..."
              aria-describedby="basic-addon2"
            />
            <span className="input-group-text" id="basic-addon2">
              <GoSearch className="search-icon fs-5" />
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
