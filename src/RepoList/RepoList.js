import React, { Fragment, useState, useEffect } from "react";
import RepoListItem from "./RepoListItem"

const username = "arilupus";
const RepoList = () => {
  const [arrListItems, setArrListItems] = useState([]);
  const [errMsg, setErrMsg] = useState("");

  async function fetchData() {
    await fetch(`https://api.github.com/users/${username}/repos`)
      .then((res) => res.json())
      .then((data) => {
        let items = [data][0].map((repo) => {
          return (
            <RepoListItem
              arrayId={repo.id}
              key={repo.id}
              fullName={repo.full_name}
            />
          );
        });
        setArrListItems(items);
      })
      .catch(err => {
        setErrMsg(err.message);
      });
  }

  useEffect(() => {
    fetchData();
  });
  return (
    <Fragment>
      <p>Github username: {username}</p>
      <p>Repository List</p>
      <ul>{errMsg ? errMsg : arrListItems}</ul>
    </Fragment>
  );
};

export default RepoList;