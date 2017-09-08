import React, { Component } from "react";

export default class Description extends Component {
  constructor() {
    super();
    this.state = {
      description: "",
    }
  }
  render() {
    return (
      <div>
        <input
          placeholder="Description"
          type="text"
          maxLength="140"
          onChange={e => {
            this.setState({ description: e.target.value });
          }}
        />
        <button>submit</button>
      </div>
    );
  }
}
