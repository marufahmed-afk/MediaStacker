import React, { Fragment, useState, useContext, useEffect } from "react";
import ComicContext from "../../context/comic/comicContext";

const ComicForm = ({ isOpen, toggleForm }) => {
  const comicContext = useContext(ComicContext);

  const {
    addComic,
    current,
    clearCurrent,
    deleteComic,
    updateComic,
  } = comicContext;

  useEffect(() => {
    if (current != null) {
      setComic(current);
    } else {
      setComic({
        name: "",
        url: "",
        read: false,
      });
    }
  }, [comicContext, current]);

  const [comic, setComic] = useState({
    name: "",
    url: "",
    read: false,
  });

  const { id, name, url, read } = comic;

  const handleChange = (e) =>
    setComic({ ...comic, [e.target.name]: e.target.value });

  const handleCheck = (e) => {
    setComic({ ...comic, read: e.target.checked });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addComic(comic);
    } else {
      updateComic(comic);
    }
    clearCurrent();
    toggleForm();
  };

  const handleDelete = (e) => {
    deleteComic(id);
    clearCurrent();
  };

  // const toggleForm = () => {
  //   console.log("hello there");
  //   setOpen(!isOpen);
  // };

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
              checked={read}
              onChange={handleCheck}
            />
            <span className="checkmark"></span>
          </label>

          <div className="submit-btns">
            <input
              type="submit"
              value={current ? "Edit" : "Add"}
              className="add-form-btn"
            />
            {current && (
              <input
                type="submit"
                value="Delete"
                className="delete-form-btn"
                onClick={handleDelete}
              />
            )}
          </div>
        </form>

        <img
          src={require("../../images/close-btn.svg")}
          alt=""
          className="close-btn"
          onClick={() => {
            toggleForm();
            //calling clearcurrent to switch from edit form to add form
            clearCurrent();
          }}
        />
      </div>

      <img
        src={require("../../images/add-btn.svg")}
        alt=""
        className="add-btn"
        onClick={() => {
          toggleForm();
          //calling clearcurrent to switch from edit form to add form
          clearCurrent();
        }}
      />
    </Fragment>
  );
};

ComicForm.propTypes = {};

export default ComicForm;
