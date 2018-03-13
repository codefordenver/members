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
        <div className="userTile">
          <li className="userid" key={user.id}>
            <div className="userPic">
              <Link to={`/volunteers/${user.id}`}>
                <Avatar src={user.picture} />
              </Link>
            </div>
            <div className="userName">
              <Link to={`/volunteers/${user.id}`}>{user.name}</Link>
            </div>
          </li>
        </div>
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
