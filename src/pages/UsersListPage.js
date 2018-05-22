import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import Avatar from 'material-ui/Avatar';
import './UsersListPage.css';
import { Link } from 'react-router-dom';
import LoadingIndicator from '../sections/LoadingIndicator';

const UsersList = ({ users, loading }) => {
  if (loading) {
    return <LoadingIndicator />;
  }
  if (!users.length) {
    return <p>No users yet</p>;
  }

  return (
    <ul>
      {users.map(user => (
        <li className="userid userTile" key={user.id}>
          <div className="userPic">
            <Link to={`/volunteers/${user.id}`}>
              <Avatar src={user.picture} />
            </Link>
          </div>
          <div className="userName">
            <Link to={`/volunteers/${user.id}`}>{user.name}</Link>
          </div>
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
  props: ({ data: { allUsers, loading } }) => ({ users: allUsers, loading })
})(UsersList);

export default UsersListPage;
