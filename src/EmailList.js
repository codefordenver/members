import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const EmailList = ({ users }) => {
  return (
    <div>
      {users.map(user =>
        <div key={user.id}>
          {user.email}
        </div>
      )}
    </div>
  );
};

EmailList.defaultProps = {
  users: []
};

const allUsersQuery = gql`
  query users {
    allUsers(orderBy: email_ASC) {
      id,
      email
    }
    
  }
`;

const EmailListWithData = graphql(allUsersQuery, {
  options: () => ({}),
  props: ({ data: { allUsers } }) => ({ users: allUsers })
})(EmailList);

export default EmailListWithData;
