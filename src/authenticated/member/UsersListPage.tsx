import React from 'react';
import gql from 'graphql-tag';
import UsersList from './UserList';
import { UsersListQuery } from '../../generated-models';
import { useCustomQuery } from '../../utils/hooks';

export const GET_USERS_LIST = gql`
  query usersList {
    allUsers(orderBy: name_ASC) {
      id
      name
      picture
    }
  }
`;

const UsersListPage: React.FC = () => {
  const { data } = useCustomQuery<UsersListQuery>(GET_USERS_LIST);

  const users = (data && data.allUsers) || [];
  return <UsersList users={users} />;
};

export default UsersListPage;
