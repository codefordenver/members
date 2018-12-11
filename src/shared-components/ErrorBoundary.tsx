import React from 'react';

export default class ErrorBoundary extends React.Component {
  state = { hasError: false };

  componentDidCatch(error: Error, info: { componentStack: string }) {
    this.setState({ hasError: true });
    console.log(error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h1>:( Something went wrong!</h1>;
    }
    return this.props.children;
  }
}
