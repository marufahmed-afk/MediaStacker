import React, { useReducer } from "react";
import axios from "axios";
import ComicContext from "./comicContext";
import comicReducer from "./comicReducer";
import {
  ADD_COMIC,
  DELETE_COMIC,
  GET_COMICS,
  UPDATE_COMIC,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_MEDIA,
  CLEAR_FILTER,
  COMIC_ERROR,
} from "../types";

const ComicState = (props) => {
  const initialState = {
    comics: [],
    current: null,
  };

  const [state, dispatch] = useReducer(comicReducer, initialState);

  // Get Comics
  const getComics = async () => {
    try {
      const res = await axios.get("/api/media/comics/");

      dispatch({
        type: GET_COMICS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: COMIC_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //Add Comic
  const addComic = async (comic) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/media/comics/", comic, config);

      dispatch({
        type: ADD_COMIC,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: COMIC_ERROR,
        payload: err.response.msg,
      });
    }
  };
  //Delete Comic
  const deleteComic = async (id) => {
    try {
      await axios.delete(`/api/media/comics/${id}`);

      dispatch({
        type: DELETE_COMIC,
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: COMIC_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //Set Current Comic
  const setCurrent = (comic) => {
    dispatch({ type: SET_CURRENT, payload: comic });
  };

  //Clear Current Comic
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //Update Comic
  const updateComic = async (comic) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(
        `/api/media/comics/${comic._id}`,
        comic,
        config
      );

      dispatch({
        type: UPDATE_COMIC,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: COMIC_ERROR,
        payload: err.response.msg,
      });
    }
  };

  //Filter Comic
  const filterMedia = (text) => {
    dispatch({ type: FILTER_MEDIA, payload: text });
  };

  //Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ComicContext.Provider
      value={{
        comics: state.comics,
        current: state.current,
        filtered: state.filtered,
        addComic,
        getComics,
        deleteComic,
        updateComic,
        setCurrent,
        clearCurrent,
        filterMedia,
        clearFilter,
      }}
    >
      {props.children}
    </ComicContext.Provider>
  );
};

export default ComicState;
