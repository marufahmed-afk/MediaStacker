import React, { Fragment, useContext, useState } from "react";
import ComicContext from "../../context/comic/comicContext";
import ComicItem from "./ComicItem";
import ComicForm from "./ComicForm";

const Comics = () => {
  const comicContext = useContext(ComicContext);

  const { comics } = comicContext;

  const [isOpen, setOpen] = useState(false);
  const toggleForm = () => {
    console.log("hello there");
    setOpen(!isOpen);
  };

  return (
    <div className="comic-page">
      <div className="wrapper">
        <div className="grid-1">
          <h2 className="grid-header text-red">Completed</h2>
          {comics.map((comic) =>
            comic.read ? (
              <ComicItem
                comic={comic}
                key={comic.id}
                isOpen={isOpen}
                setOpen={setOpen}
              />
            ) : (
              ""
            )
          )}
        </div>

        <div className="grid-2">
          <h2 className="grid-header">Pending</h2>
          {comics.map((comic) =>
            comic.read ? (
              ""
            ) : (
              <ComicItem
                comic={comic}
                key={comic.id}
                isOpen={isOpen}
                setOpen={setOpen}
              />
            )
          )}
        </div>
      </div>

      <ComicForm isOpen={isOpen} toggleForm={toggleForm} />

      <div className="page-name">
        <h1>Comics</h1>
      </div>
    </div>
  );
};

export default Comics;
