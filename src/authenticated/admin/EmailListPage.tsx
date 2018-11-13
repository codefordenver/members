import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { format, subDays } from 'date-fns';
import LoadingIndicator from '../../shared-components/LoadingIndicator';
import {
  userEmails,
  userEmails_allUsers,
  userEmailsVariables
} from './__generated__/userEmails';

interface EmailListProps {
  users?: userEmails_allUsers[];
  loading: boolean;
}

const EmailList: React.SFC<EmailListProps> = ({ users = [], loading }) => (
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

const allUsersQuery = gql`
  query userEmails($date: DateTime) {
    allUsers(orderBy: email_ASC, filter: { createdAt_gt: $date }) {
      id
      email
    }
  }
`;

type EmailListPage = {};

const EmailListPage = graphql<
  EmailListPage,
  userEmails,
  userEmailsVariables,
  EmailListProps
>(allUsersQuery, {
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
