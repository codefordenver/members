import React from "react";
import { Link } from "react-router-dom";

const MemberProfile = ({ user }) => {
  if (!user) {
    return (
      <div>
        Loading...
      </div>
    )
  }
  return (
    <div>
      <img src={user.picture} alt="avatar" />
      <h1>{user.name}</h1>
      <p>{user.description}</p>
      <p>{user.email}</p>
      <p>GitHub: {user.githubName}</p>
      <p>Flowdock: {user.flowdockName}</p>
      <Link to="/me/edit">edit</Link>
    </div>
  );
};

export default MemberProfile;
