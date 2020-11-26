import React from "react";
import UserCard from "./UserCard";

const SearchResults = ({ users }) => {
  const renderedUsers = users.map((user) => {
    return <UserCard user={user} />;
  });

  return <div className="row justify-content-center pt-5">{renderedUsers}</div>;
};

export default SearchResults;
