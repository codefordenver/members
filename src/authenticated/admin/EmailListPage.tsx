import React, { useMemo } from 'react';
import { format, subDays } from 'date-fns';
import { useCustomQuery } from '../../utils/hooks';
import { UserEmailsDocument, UserEmailsQuery } from '../../generated-models';

const EmailListPage: React.FC = () => {
  const date7DaysAgo = useMemo(
    () => format(subDays(new Date(), 7), 'YYYY-MM-DDTHH:mm:ss.SSSZ'),
    []
  );
  const { data } = useCustomQuery<UserEmailsQuery>(UserEmailsDocument, {
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
