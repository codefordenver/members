import React from 'react';
import { CircularProgress } from 'material-ui/Progress';

// The presentation of the indicator is delayed to improve perceived performance
// See: https://material-ui-next.com/demos/progress/#delaying-appearance
const PROGRESS_DELAY = 1000;

class LoadingIndicator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isShown: false
    };
    this.timeoutId = setTimeout(
      () => this.setState({ isShown: true }),
      PROGRESS_DELAY
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timeoutId);
  }

  render() {
    if (this.state.isShown) {
      return <CircularProgress color={this.props.color} />;
    }
    return null;
  }
}

export default LoadingIndicator;
