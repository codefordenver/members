import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { UsersListAllUsers } from '../../generated-models';
import './UsersList.css';

interface UsersListProps {
  users: UsersListAllUsers[];
}

const UsersList: React.FC<UsersListProps> = ({ users = [] }) => {
  if (!users.length) {
    return <p>No users yet</p>;
  }

  return (
    <ul>
      {users.map(user => (
        <li className="userid userTile" key={user.id}>
          <div className="userPic">
            <Link to={`/volunteers/${user.id}`}>
              <Avatar src={user.picture || ''} />
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

export default UsersList;
