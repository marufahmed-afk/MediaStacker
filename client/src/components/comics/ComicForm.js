import React, { Fragment, useState, useContext } from "react";
import ComicContext from "../../context/comic/comicContext";

const ComicForm = () => {
  const comicContext = useContext(ComicContext);

  const { addComic } = comicContext;

  const [isOpen, setOpen] = useState(false);
  const [comic, setComic] = useState({
    name: "",
    url: "",
    read: false,
  });

  const { name, url, read } = comic;

  const handleChange = (e) =>
    setComic({ ...comic, [e.target.name]: e.target.value });

  const handleCheck = (e) => {
    setComic({ ...comic, read: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addComic(comic);
    setComic({
      name: "",
      url: "",
      read: false,
    });
  };

  const toggleForm = () => {
    console.log("hello there");
    setOpen(!isOpen);
  };

  return (
    <Fragment>
      <div className={`add-form ${isOpen ? " toggle-form " : " "}`}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Title</label>
          <input type="text" name="name" value={name} onChange={handleChange} />
          <label htmlFor="url">URL</label>
          <input type="text" name="url" value={url} onChange={handleChange} />
          <label className="completed-div">
            Completed
            <input
              type="checkbox"
              name="read"
              value={read}
              onChange={handleCheck}
            />
            <span className="checkmark"></span>
          </label>

          <div className="submit-btns">
            <input type="submit" value="Add" className="add-form-btn" />
            <input type="submit" value="Delete" className="delete-form-btn" />
          </div>
        </form>

        <img
          src={require("../../images/close-btn.svg")}
          alt=""
          className="close-btn"
          onClick={toggleForm}
        />
      </div>

      <img
        src={require("../../images/add-btn.svg")}
        alt=""
        className="add-btn"
        onClick={toggleForm}
      />
    </Fragment>
  );
};

ComicForm.propTypes = {};

export default ComicForm;
