import React from 'react';
import { format, subDays } from 'date-fns';
import LoadingIndicator from '../../shared-components/LoadingIndicator';
import { UserEmailsHOC, UserEmailsAllUsers } from '../../generated-models';

interface EmailListProps {
  users: UserEmailsAllUsers[];
  loading: boolean;
}

const EmailList: React.FC<EmailListProps> = ({ users, loading }) => (
  <div>
    <h1>Users that signed up in the last week</h1>
    {loading ? (
      <LoadingIndicator />
    ) : users.length > 0 ? (
      users.map(user => <div key={user.id}>{user.email}</div>)
    ) : (
      <p>No new users signed up in the last week</p>
    )}
  </div>
);

const EmailListPage = UserEmailsHOC({
  options: {
    variables: {
      date: format(subDays(new Date(), 7), 'YYYY-MM-DDTHH:mm:ss.SSSZ')
    }
  },
  props: props => {
    const { allUsers = [], loading = true } = props.data || {};
    return { users: allUsers, loading };
  }
})(EmailList);

export default EmailListPage;
