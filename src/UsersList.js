import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const UsersList = ({ users }) => {
  return (
    <div>
      {users.map(user =>
        <div key={user.email}>
          {user.email}
        </div>
      )}
    </div>
  );
};

UsersList.defaultProps = {
  users: []
};

const allUsersQuery = gql`
  query users {
    allUsers {
      email
    }
  }
`;

const UsersListWithData = graphql(allUsersQuery, {
  options: () => ({}),
  props: ({ data: { allUsers } }) => ({ users: allUsers })
})(Members);

export default UsersListWithData;
