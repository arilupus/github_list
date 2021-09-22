import React from "react";

const RepoListItem = (props) => {
  return (
    <li className="listItem">
      <div className="id">id: {props.arrayId}</div>
      <div className="fullName">
        Repository Name: {props.fullName.split('/')[1]}
      </div>
    </li>
  )
}

export default RepoListItem;