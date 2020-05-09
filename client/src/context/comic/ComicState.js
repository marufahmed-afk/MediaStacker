import React, { useReducer } from "react";
import uuid from "uuid";
import ComicContext from "./comicContext";
import comicReducer from "./comicReducer";
import { ADD_COMIC, DELETE_COMIC, UPDATE_COMIC } from "../types";

const ComicState = (props) => {
  const initialState = {
    comics: [
      {
        id: 1,
        name: "Flashpoint",
        url: "flashpoint.com",
        read: true,
      },
      {
        id: 2,
        name: "Batman",
        url: "batman.com",
        read: false,
      },
    ],
  };

  const [state, dispatch] = useReducer(comicReducer, initialState);

  //Add Comic

  //Delete Comic

  //Update Comic

  return (
    <ComicContext.Provider
      value={{
        comics: state.comics,
      }}
    >
      {props.children}
    </ComicContext.Provider>
  );
};

export default ComicState;
