import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { format, subDays } from 'date-fns';
import LoadingIndicator from '../../shared-components/LoadingIndicator';

const EmailList = ({ users, loading }) => (
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

EmailList.defaultProps = {
  users: []
};

const allUsersQuery = gql`
  query users($date: DateTime) {
    allUsers(orderBy: email_ASC, filter: { createdAt_gt: $date }) {
      id
      email
    }
  }
`;

const EmailListPage = graphql(allUsersQuery, {
  options: {
    variables: {
      date: format(subDays(new Date(), 7), 'YYYY-MM-DDTHH:mm:ss.SSSZ')
    }
  },
  props: ({ data: { allUsers }, loading }) => ({ users: allUsers, loading })
})(EmailList);

export default EmailListPage;
