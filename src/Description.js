import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";

const updateUserQuery = gql`
  mutation($id: ID!, $description: String!) {
    updateUser(id: $id, description: $description) {
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

class Description extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: ""
    };
    this.updateUser = props.updateUser;
  }

  updateDB() {
    const { description } = this.state;
    const { id } = this.props.data.user
    this.props.updateUser({ variables: { id, description } });
  }

  render() {
    return (
      <div>
        <textarea
          placeholder="Description"
          type="text"
          maxLength="140"
          onChange={e => {
            this.setState({ description: e.target.value });
          }}
        />
        <button onClick={() => this.updateDB()}>submit</button>
      </div>
    );
  }
}

const DescriptionWithData = compose(
  graphql(updateUserQuery, {
    name: "updateUser"
  }),
  graphql(userQuery, {
    options: {
      fetchPolicy: "network-only"
    }
  })
)(Description);

export default DescriptionWithData;
