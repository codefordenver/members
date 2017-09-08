import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const updateUserQuery = gql`
  mutation($description: String!) {
    updateUser(description: $description) {
      user
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
    this.props.updateUser(this.state.description);
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
        <button onClick={() => this.updateDB()}>
          submit
        </button>
      </div>
    );
  }
}

const DescriptionWithData = graphql(updateUserQuery, {
  name: "updateUser"
})(Description);

export default DescriptionWithData;
