import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import Avatar from 'material-ui/Avatar';


const UsersList = ({ users }) => {
  return (
    <div>
      {users.map(user =>
        <div key={user.id}>
          <Avatar src={user.picture}/>
          {user.name}
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
    allUsers(orderBy: name_ASC) {
      name
      picture
    }
  }
`;

const UsersListWithData = graphql(allUsersQuery, {
  options: () => ({}),
  props: ({ data: { allUsers } }) => ({ users: allUsers })
})(UsersList);

export default UsersListWithData;
