import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Avatar from 'material-ui/Avatar';
import './UsersListPage.css';
import { Link } from 'react-router-dom';

const UsersList = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <li className="userid" key={user.id}>
          <Link to={`/volunteers/${user.id}`}>
            <Avatar src={user.picture} />
            {user.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

UsersList.defaultProps = {
  users: []
};

const allUsersQuery = gql`
  query users {
    allUsers(orderBy: name_ASC) {
      id
      name
      picture
    }
  }
`;

const UsersListPage = graphql(allUsersQuery, {
  options: () => ({}),
  props: ({ data: { allUsers } }) => ({ users: allUsers })
})(UsersList);

export default UsersListPage;
