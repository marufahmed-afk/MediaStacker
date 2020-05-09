import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbar = ({ title }) => {
  const [isOpen, setOpen] = useState(false);
  const toggleNav = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="navbar container">
      <div className="logo">{title}</div>
      <div className="nav-elements">
        <img
          src={require("../../images/ham.svg")}
          alt=""
          className="ham"
          onClick={toggleNav}
        />
        <div className={`nav-list ${isOpen ? " close-nav " : " "}`}>
          <img
            src={require("../../images/back-arrow.svg")}
            alt=""
            className="back-arrow"
            onClick={toggleNav}
          />
          <ul>
            <Link to="#"> Collection </Link>
            <Link to="#"> About </Link>
            <Link to="#"> Settings </Link>
            <Link to="#"> Logout </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

Navbar.prototype = {
  title: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Media.",
};

export default Navbar;
