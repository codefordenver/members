import React from 'react';
import UsersList from './UserList';
import { useQuery } from 'react-apollo-hooks';
import { UsersListDocument, UsersListQuery } from '../../generated-models';

const UsersListPage: React.FC = () => {
  const { data, error, loading } = useQuery<UsersListQuery>(UsersListDocument);
  if (error) return <div>Error! {error.message}</div>;

  const users = (data && data.allUsers) || [];
  return <UsersList users={users} loading={loading} />;
};

export default UsersListPage;
