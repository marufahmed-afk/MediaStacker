import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import ComicContext from "../../context/comic/comicContext";

const ComicItem = ({ comic, isOpen, setOpen }) => {
  const comicContext = useContext(ComicContext);

  const { setCurrent } = comicContext;

  const toggleForm = () => {
    console.log("hello there from comic Item");
    setCurrent(comic);
    setOpen(!isOpen);
  };

  return (
    <div className="card">
      <p>{comic.name}</p>
      <a href={comic.url}>
        <img src={require("../../images/url.svg")} alt="" className="url-img" />
      </a>
      <img
        src={require("../../images/options.svg")}
        alt=""
        className="options-img"
        onClick={toggleForm}
      />
    </div>
  );
};

ComicItem.propTypes = {
  comic: PropTypes.object.isRequired,
};

export default ComicItem;
