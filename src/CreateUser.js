import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";


// TODO: rm this module all together

class CreateUser extends Component {

  create = (idToken, name, email) => {
    this.props.createUser({
      variables: {
        idToken,
        name,
        email
      }
    });
  };

  render() {
    return(
      <div>
        Loading...
      </div>
    )
  }

}

const createUserQuery = gql`
  mutation($idToken: String!, $name: String!, $email: String!) {
    createUser(
      authProvider: { auth0: { idToken: $idToken } }
      name: $name
      email: $email
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

// export default graphql(createUserQuery, { name: "createUser" })(
//   graphql(userQuery, {
//     name: "user",
//     options: {
//       fetchPolicy: "network-only",
//     }
//   })(CreateUser)
// );

export default compose(
  graphql(createUserQuery, { name: 'createUser' }),
  graphql(userQuery),
)(CreateUser)
