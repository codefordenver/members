import UsersList from './UserList';
import { UsersListHOC } from '../../generated-models';

const UsersListPage = UsersListHOC({
  props: props => {
    const { allUsers = [], loading = true } = props.data || {};
    return { users: allUsers, loading };
  }
})(UsersList);

export default UsersListPage;
