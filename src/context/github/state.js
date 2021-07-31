import React, { useReducer } from "react";
import {
  GET_USER,
  SEARCH_USERS,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
} from "../types";
import GithubContext from "./context";
import axios from "axios";
import reducer from "../github/reducer";

let baseUrl = "https://api.github.com/";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  //*Search Users
  const searchUsers = async (text) => {
    setLoading();
    const res = await axios.get(`${baseUrl}search/users?q=${text}`);

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };
  //*Get User
  const getUser = async (username) => {
    setLoading();

    const res = await axios.get(`${baseUrl}users?q=${username}`);

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  //*Get Repos
  const getUserRepos = async (username) => {
    setLoading();

    const res = await axios.get(
      `${baseUrl}users/${username}/repos?per_page=5&sort=created:asc&client_id=undefined&client_secret=undefined/`
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  };

  //*Clear Users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });

  //*Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        getUser,
        clearUsers,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
