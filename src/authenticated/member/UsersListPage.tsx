import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import UsersList from './UserList';
import { usersList, usersList_allUsers } from './__generated__/usersList';

const allUsersQuery = gql`
  query usersList {
    allUsers(orderBy: name_ASC) {
      id
      name
      picture
    }
  }
`;

type UsersListProps = {
  users: usersList_allUsers[];
  loading: boolean;
};

const UsersListPage = graphql<{}, usersList, {}, UsersListProps>(
  allUsersQuery,
  {
    props: props => {
      const { allUsers = [], loading = true } = props.data || {};
      return { users: allUsers, loading };
    }
  }
)(UsersList);

export default UsersListPage;
