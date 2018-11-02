import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import UsersList from './UserList';

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
