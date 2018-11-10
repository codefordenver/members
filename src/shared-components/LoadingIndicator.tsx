import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

// The presentation of the indicator is delayed to improve perceived performance
// See: https://material-ui-next.com/demos/progress/#delaying-appearance
const PROGRESS_DELAY = 1000;

interface Props {
  color?: 'primary' | 'secondary' | 'inherit';
}

interface State {
  isShown: boolean;
}

class LoadingIndicator extends React.PureComponent<Props, State> {
  timeoutId: number;

  constructor(props: Props) {
    super(props);
    this.state = {
      isShown: false
    };
    this.timeoutId = window.setTimeout(
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
