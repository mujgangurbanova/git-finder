import {
  SEARCH_USERS,
  GET_REPOS,
  GET_USER,
  CLEAR_USERS,
  SET_LOADING,
} from "../types";

const state = (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case GET_USER:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    case GET_REPOS:
      return {
        ...state,
        loading: false,
        repos: action.payload,
      };

    case CLEAR_USERS:
      return {
        ...state,
        loading: false,
        users: [],
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };

    default:
      return state;
  }
};
export default state;
