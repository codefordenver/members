import React from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";

const MemberProfile = ({user, memberStore}) => {
  return (
    <div>
      <img src={user.picture} alt="avatar" />
      <h1>
        {user.name}
      </h1>
      <p>
        {user.description}
      </p>
      <p>
        {user.email}
      </p>
      <p>
        GitHub: {user.githubName}
      </p>
      <p>
        Flowdock: {user.flowdockName}
      </p>
    </div>
  );
};

export default observer(MemberProfile);
