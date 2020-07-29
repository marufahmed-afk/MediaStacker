import {
  ADD_COMIC,
  DELETE_COMIC,
  UPDATE_COMIC,
  SET_CURRENT,
  CLEAR_CURRENT,
  FILTER_MEDIA,
  CLEAR_FILTER,
  GET_COMICS,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_COMIC:
      return {
        ...state,
        comics: [...state.comics, action.payload],
      };
    case UPDATE_COMIC:
      return {
        ...state,
        comics: state.comics.map((comic) =>
          comic.id === action.payload.id ? action.payload : comic
        ),
      };
    case DELETE_COMIC:
      return {
        ...state,
        comics: state.comics.filter((comic) => comic._id !== action.payload),
      };
    case GET_COMICS:
      return {
        ...state,
        comics: action.payload,
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
    case FILTER_MEDIA:
      return {
        ...state,
        filtered: state.comics.filter((comic) => {
          const regex = new RegExp(`${action.payload}`, 'gi');
          return comic.name.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };

    default:
      return state;
  }
};
