import React, { useMemo } from 'react';
import gql from 'graphql-tag';
import { format, subDays } from 'date-fns';
import { useCustomQuery } from '../../utils/hooks';
import { UserEmailsQuery } from '../../generated-models';

const GET_USER_EMAILS = gql`
  query userEmails($date: DateTime) {
    allUsers(orderBy: email_ASC, filter: { createdAt_gt: $date }) {
      id
      email
    }
  }
`;

const EmailListPage: React.FC = () => {
  const date7DaysAgo = useMemo(
    () => format(subDays(new Date(), 7), 'YYYY-MM-DDTHH:mm:ss.SSSZ'),
    []
  );
  const { data } = useCustomQuery<UserEmailsQuery>(GET_USER_EMAILS, {
    variables: {
      date: date7DaysAgo
    }
  });
  const users = (data && data.allUsers) || [];

  return (
    <div>
      <h1>Users that signed up in the last week</h1>
      {users.length > 0 ? (
        users.map(user => <div key={user.id}>{user.email}</div>)
      ) : (
        <p>No new users signed up in the last week</p>
      )}
    </div>
  );
};

export default EmailListPage;
