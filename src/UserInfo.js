import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql, compose } from "react-apollo";

const updateUserQuery = gql`
  mutation(
    $id: ID!
    $githubName: String!
    $flowdockName: String!
    $description: String!
  ) {
    updateUser(
      id: $id
      githubName: $githubName
      flowdockName: $flowdockName
      description: $description
    ) {
      id
    }
  }
`;

const userQuery = gql`
  query {
    user {
      id
      githubName
      flowdockName
    }
  }
`;

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      githubName: "",
      flowdockName: "",
      description: ""
    };
    this.updateUser = props.updateUser;
  }

  componentWillReceiveProps(props) {
    if(props.data.user) {
      let { githubName, flowdockName } = props.data.user;
      this.setState({ githubName, flowdockName });
    }
  }

  updateDB() {
    const { githubName, flowdockName, description } = this.state;
    const { id } = this.props.data.user;
    this.props.updateUser({
      variables: { id, githubName, flowdockName, description }
    });
  }

  render() {
    return (
      <div>
        <label htmlFor="github">GitHub Username:</label>
        <input
          id="github"
          placeholder="username"
          value={this.state.githubName}
          onChange={e => this.setState({ githubName: e.target.value })}
        />
        <label htmlFor="flow">Flowdock Username:</label>
        <input
          id="flow"
          placeholder="username"
          value={this.state.flowdockName}
          onChange={e => this.setState({ flowdockName: e.target.value })}
        />
        <label htmlFor="desc">Description:</label>
        <textarea
          id="desc"
          placeholder="description"
          value={this.state.description}
          type="text"
          maxLength="140"
          onChange={e => this.setState({ description: e.target.value })}
        />
        <button onClick={() => this.updateDB()}>submit</button>
      </div>
    );
  }
}

const UserInfoWithData = compose(
  graphql(updateUserQuery, {
    name: "updateUser"
  }),
  graphql(userQuery, {
    options: {
      fetchPolicy: "network-only"
    }
  })
)(UserInfo);

export default UserInfoWithData;
