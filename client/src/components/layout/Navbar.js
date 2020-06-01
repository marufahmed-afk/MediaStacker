import React, { Fragment, useState, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";

const Navbar = ({ title }) => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const [isOpen, setOpen] = useState(false);
  const toggleNav = () => {
    setOpen(!isOpen);
  };

  const authLinks = (
    <Fragment>
      <li>Hello {user && user.name}</li>

      <li>
        <Link to="#"> Collection </Link>
      </li>

      <li>
        <Link to="#"> Settings </Link>
      </li>

      <li>
        <a href="#" className="logout">
          Logout
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="#"> About </Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

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
        <div className={`nav-list ${isOpen ? " toggle-nav " : " "}`}>
          <img
            src={require("../../images/back-arrow.svg")}
            alt=""
            className="back-arrow"
            onClick={toggleNav}
          />
          <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
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
