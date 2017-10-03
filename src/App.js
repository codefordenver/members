import React, { Component } from "react";
import { Route, withRouter } from "react-router-dom";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { observer } from "mobx-react";
import DevTools from "mobx-react-devtools";
import MemberResources from "./MemberResources";
import Login from "./Login";
import MemberProfile from "./MemberProfile";
import UserInfo from "./UserInfo";
import MemberStore from "./MemberStore";

import "./App.css";

class App extends Component {
  componentWillUpdate() {
    if (!this.props.data.user) {
      this.props.data.refetch();
    }
  }

  componentWillReceiveProps(props) {
    Object.assign(props.memberStore, props.data.user);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Code for Denver Members</h2>
          <Login user={this.props.data.user} />
        </div>
        <Route exact path="/" component={MemberResources} />
        <Route
          exact
          path="/user"
          render={() => <MemberProfile user={this.props.data.user} memberStore={new MemberStore()} />}
        />
        <Route path="/user/edit" component={UserInfo} />
      </div>
    );
  }
}

const userQuery = gql`
  query {
    user {
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

const observed = withRouter(observer(App));

export default graphql(userQuery, {
  options: {
    fetchPolicy: "network-only"
  }
})(observed);
