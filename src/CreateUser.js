import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";

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

  // requestUserData = () => {
  //   const id_token = window.localStorage.getItem("cfd-members-auth0IdToken");
  //   fetch("https://codefordenver.auth0.com/tokeninfo", {
  //     method: "POST",
  //     mode: "cors",
  //     redirect: "follow",
  //     headers: new Headers({
  //       "Content-Type": "application/json"
  //     }),
  //     body: JSON.stringify({
  //       id_token
  //     })
  //   })
  //     .then(data => data.json())
  //     .then(json => {
  //       try {
  //         this.create(id_token, json.name, json.email);
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     });
  // };

  render() {
    console.log(this)
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
