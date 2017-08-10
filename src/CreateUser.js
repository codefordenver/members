import React from "react";

const createUser = gql`
  mutation($idToken: String!, $name: String!, $emailAddress: String!) {
    createUser(
      authProvider: { auth0: { idToken: $idToken } }
      name: $name
      emailAddress: $emailAddress
    ) {
      id
    }
  }
`;

const userQuery = gql`
  query {
    user {
      id
    }
  }
`;

export default graphql(createUser, { name: "createUser" })(
  graphql(userQuery, { options: { fetchPolicy: "network-only" } })(
    withRouter(CreateUser)
  )
);
