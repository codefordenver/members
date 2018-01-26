import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { format, subDays } from 'date-fns';

const EmailList = ({ users }) => {
  return <div>{users.map(user => <div key={user.id}>{user.email}</div>)}</div>;
};

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

const EmailListWithData = graphql(allUsersQuery, {
  options: {
    variables: {
      date: format(subDays(new Date(), 7), 'YYYY-MM-DDTHH:mm:ss.SSSZ')
    }
  },
  props: ({ data: { allUsers } }) => ({ users: allUsers })
})(EmailList);

export default EmailListWithData;
