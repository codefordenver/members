import React from 'react';

const Login = () => {
  return (
      <LoginAuth0
        clientId="Qgo5BOv5XsU60A6mFSjmZpzfTrYy8I5I"
        domain="codefordenver.auth0.com"
      />
      <p>Hello, {this.props.data.user.name}</p>
    </div>
  )
}
