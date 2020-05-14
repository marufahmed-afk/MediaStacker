import React, { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import ComicContext from "./comicContext";
import comicReducer from "./comicReducer";
import {
  ADD_COMIC,
  DELETE_COMIC,
  UPDATE_COMIC,
  SET_CURRENT,
  CLEAR_CURRENT,
} from "../types";

const ComicState = (props) => {
  const initialState = {
    comics: [
      {
        id: 1,
        name: "Flashpoint Paradox",
        url: "flashpoint.com",
        read: false,
      },
      {
        id: 2,
        name: "Catwoman Returns",
        url: "catwoman.com",
        read: true,
      },
      {
        id: 3,
        name: "Dark Knight Returns",
        url: "batman.com",
        read: true,
      },
      {
        id: 4,
        name: "Superman Red Son",
        url: "superman.com",
        read: false,
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(comicReducer, initialState);

  //Add Comic
  const addComic = (comic) => {
    comic.id = uuidv4();
    dispatch({ type: ADD_COMIC, payload: comic });
  };
  //Delete Comic

  //Set Current Comic
  const setCurrent = (comic) => {
    dispatch({ type: SET_CURRENT, payload: comic });
  };

  //Clear Current Comic
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //Update Comic

  return (
    <ComicContext.Provider
      value={{
        comics: state.comics,
        addComic,
        setCurrent,
        clearCurrent,
      }}
    >
      {props.children}
    </ComicContext.Provider>
  );
};

export default ComicState;
