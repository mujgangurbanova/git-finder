import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";
import GithubContext from "../../context/github/context";
import Spinner from "../layouts/Spinner";

function User({ match }) {
  const { getUser, user, getUserRepos, loading, repos } =
    useContext(GithubContext);

  const {
    bio,
    name,
    login,
    avatar_url,
    hireable,
    blog,
    company,
    followers,
    following,
    html_url,
    location,
    public_repos,
    public_gists,
  } = user;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
  }, []);

  if (loading) return <Spinner />;

  return (
    <>
      <Link className="btn btn-light" to="/">
        Back to search
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i class="fas fa-check text-success"></i>
      ) : (
        <i class="fas fa-times-circle text-danger"></i>
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            className="round-img"
            style={{ width: "150px" }}
            src={avatar_url}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          <>
            <h3>Bio</h3>
            <p>{bio}</p>
          </>
          <a target="_blank" href={html_url} className="btn btn-dark my-1">
            Visit github profile
          </a>
          <ul>
            <li>
              <strong>Username:</strong> {login}
            </li>
            <li>
              <strong>Website:</strong> {blog}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public repos: {public_repos}</div>
        <div className="badge badge-dark">Public gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </>
  );
}

export default User;
