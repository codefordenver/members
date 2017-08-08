import React, {Component} from 'react';

export default class LoginAuth0 extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this._lock.on('authenticated', (authResult) => {
      window.localStorage.setItem('auth0IdToken', authResult.idToken)
      this.props.router.replace(`/login`)
    })
  }

  this._lock = new Auth0Lock(props.clientId, props.domain)

  _showLogin = () => {
    this._lock.show()
  }

  render() {
    return (
      <div>
        <span
          onClick={this._showLogin}
          className='dib pa3 white bg-blue dim pointer'
        >
          Log in with Auth0
        </span>
      </div>
    )
  }
}
