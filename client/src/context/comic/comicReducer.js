import {
  ADD_COMIC,
  DELETE_COMIC,
  UPDATE_COMIC,
  SET_CURRENT,
  CLEAR_CURRENT,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case ADD_COMIC:
      return {
        ...state,
        comics: [...state.comics, action.payload],
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    default:
      return state;
  }
};
