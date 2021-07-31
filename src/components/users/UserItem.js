import React from "react";
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function UserItem({ user: { login, avatar_url, html_url } }) {
  return (
    <div className="card text-center">
      <img
        className="round-img"
        style={{ width: "150px" }}
        src={avatar_url}
      />
      <h3>{login}</h3>
      <div>
        <Link to={`/user/${login}`} href={html_url} className="btn btn-dark btn-sm my-1">
          More
        </Link>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}

export default UserItem;
