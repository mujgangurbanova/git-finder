import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/context";
import AlertContext from "../../context/alert/alertContext";

function Search() {
  const githubContext = useContext(GithubContext);
  const { alert, setAlert } = useContext(AlertContext);
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("please enter smth", 'damger');
    } else {
      setText("");
      githubContext.searchUsers(text);
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="form">
        <input
          type="text"
          name="text"
          value={text}
          placeholder="Search user..."
          autoComplete="off"
          onChange={onChange}
        />
        <button className="btn btn-dark btn-block">Search</button>
      </form>
      <button onClick={githubContext.clearUsers} className="btn btn-light btn-block">Clear</button>
    </div>
  );
}

export default Search;
