import React from "react";
import RepoItem from "./RepoItem";

const Repos = ({ repos }) => {
    console.log(repos);
  return repos.map((repo) => <RepoItem key={repo.id} repo={repo} />);
};

export default Repos;
