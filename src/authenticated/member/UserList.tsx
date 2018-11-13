import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import LoadingIndicator from '../../shared-components/LoadingIndicator';
import './UsersList.css';

interface UsersListProps {
  users: Array<{
    __typename: 'User';
    id: string;
    name: string | null;
    picture: string | null;
    [otherKeys: string]: any;
  }>;
  loading: boolean;
}

const UsersList: React.SFC<UsersListProps> = ({ users = [], loading }) => {
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
