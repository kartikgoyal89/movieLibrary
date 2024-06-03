import React, { useState, useEffect } from "react";
import { RxCross2 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = (props) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsVisible(window.innerWidth <= 910);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <div
        style={isVisible ? { display: "block" } : { display: "none" }}
        className={`sidebar-menu  ${props.menuNew} `}
      >
        <div className="sidebar-container">
          <div className="heading">
            <h2>Menu</h2>
            <RxCross2 onClick={props.crossClicked} className="cross" />
          </div>
          <hr className="hr" />
          <div className="list">
            <ul>
              <Link>
                <button>
                  <h3>Home</h3>
                </button>
              </Link>
              <Link>
                <button>
                  <h3>Cameras & Videos</h3>
                </button>
              </Link>
              <Link>
                <button>
                  <h3>Computers & Laptops</h3>
                </button>
              </Link>
              <Link>
                <button>
                  <h3>Home Appliances</h3>
                </button>
              </Link>
              <Link>
                <button>
                  <h3>Handbag</h3>
                </button>
              </Link>

              <Link>
                <button>
                  <h3>Mobiles & Tablets</h3>
                </button>
              </Link>

              <Link>
                <button>
                  <h3>Smart Phones</h3>
                </button>
              </Link>
              <Link>
                <button>
                  <h3>Portable Speakers</h3>
                </button>
              </Link>
              <Link>
                <button>
                  <h3>Music & Gaming</h3>
                </button>
              </Link>
              <Link to="/store">
                <button>
                  <h3>Our Store</h3>
                </button>
              </Link>
              <Link to="/blog">
                <button>
                  <h3>Blogs</h3>
                </button>
              </Link>
              <Link to="/contact">
                <button>
                  <h3>Contact</h3>
                </button>
              </Link>
            </ul>
          </div>
        </div>

        <div className="social-icons">
          <ul>
            <Link>
              <div className="icon">
                <Link>
                  <FaFacebook />
                </Link>
              </div>
            </Link>
            <Link>
              <div className="icon">
                <Link>
                  <FaTwitter />
                </Link>
              </div>
            </Link>
            <Link>
              <div className="icon">
                <Link>
                  <FaInstagram />
                </Link>
              </div>
            </Link>
            <Link>
              <div className="icon">
                <Link>
                  <FaLinkedin />
                </Link>
              </div>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
