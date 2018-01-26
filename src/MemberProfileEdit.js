import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import gql from 'graphql-tag';
import { graphql, compose } from 'react-apollo';
import { componentWithLoggedInUser } from './utils';

const updateUserQuery = gql`
  mutation updateUser(
    $id: ID!
    $githubName: String
    $flowdockName: String
    $description: String
  ) {
    updateUser(
      id: $id
      githubName: $githubName
      flowdockName: $flowdockName
      description: $description
    ) {
      id
      name
      picture
      email
      flowdockName
      githubName
      description
    }
  }
`;

class MemberProfileEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      githubName: '',
      flowdockName: '',
      description: ''
    };
  }

  componentWillReceiveProps(props) {
    if (props.data.User) {
      const { githubName, flowdockName, description } = props.data.User;
      this.setState(state => ({
        githubName: githubName || state.githubName,
        flowdockName: flowdockName || state.flowdockName,
        description: description || state.description
      }));
    }
  }

  updateDB() {
    const { githubName, flowdockName, description } = this.state;
    const { data: { User: { id } }, history } = this.props;
    this.props.updateUser({
      variables: { id, githubName, flowdockName, description }
    });
    history.push('/me');
  }

  render() {
    const { githubName, flowdockName, description } = this.state;
    return (
      <div>
        <label htmlFor="github">GitHub Username:</label>
        <input
          id="github"
          placeholder="username"
          value={githubName}
          onChange={e => this.setState({ githubName: e.target.value })}
        />
        <label htmlFor="flow">Flowdock Username:</label>
        <input
          id="flow"
          placeholder="username"
          value={flowdockName}
          onChange={e => this.setState({ flowdockName: e.target.value })}
        />
        <label htmlFor="desc">Description:</label>
        <textarea
          id="desc"
          placeholder="description"
          value={description}
          type="text"
          maxLength="140"
          onChange={e => this.setState({ description: e.target.value })}
        />
        <button onClick={() => this.updateDB()}>submit</button>
      </div>
    );
  }
}

const MemberProfileEditWithData = compose(
  graphql(updateUserQuery, {
    name: 'updateUser'
  }),
  componentWithLoggedInUser
)(MemberProfileEdit);

export default withRouter(MemberProfileEditWithData);
