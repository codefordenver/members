import React from 'react';
import UsersList from './UserList';
import { UsersListDocument, UsersListQuery } from '../../generated-models';
import { useCustomQuery } from '../../utils/hooks';

const UsersListPage: React.FC = () => {
  const { data } = useCustomQuery<UsersListQuery>(UsersListDocument);

  const users = (data && data.allUsers) || [];
  return <UsersList users={users} />;
};

export default UsersListPage;
