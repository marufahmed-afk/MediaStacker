import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

//trying stuff
import ComicForm from "../comics/ComicForm";

const ComicItem = ({ comic }) => {
  const { toggleForm } = ComicForm;

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
