import React, { Fragment, useContext, useState, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import ComicContext from "../../context/comic/comicContext";
import ComicItem from "./ComicItem";
import ComicForm from "./ComicForm";
import ComicFilter from "./ComicFilter";

const Comics = () => {
  const authContext = useContext(AuthContext);
  const comicContext = useContext(ComicContext);

  const { getComics, comics, filtered } = comicContext;

  useEffect(() => {
    authContext.loadUser();
    getComics();
    // eslint-disable-next-line
  }, []);

  const [isOpen, setOpen] = useState(false);
  const toggleForm = () => {
    console.log("hello there");
    setOpen(!isOpen);
  };

  return (
    <div className="comic-page">
      <ComicFilter />
      <div className="wrapper">
        <div className="grid-1">
          <h2 className="grid-header text-red">Completed</h2>
          {filtered && filtered !== null
            ? filtered.map((comic) =>
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
              )
            : comics.map((comic) =>
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
          {filtered && filtered !== null
            ? filtered.map((comic) =>
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
              )
            : comics.map((comic) =>
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
