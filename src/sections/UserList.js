import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import LoadingIndicator from '../sections/LoadingIndicator';
import './UsersList.css';

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

export default UsersList;
