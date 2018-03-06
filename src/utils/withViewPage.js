import React from 'react';
import Button from 'material-ui/Button';
import { Link, withRouter } from 'react-router-dom';
import getDisplayName from './getDisplayName';
import LoadingIndicator from '../sections/LoadingIndicator';

/**
 * A Higher Order Component that takes options, then a component to wrap.
 * The result takes props:
 * - `formData`: the data to display
 * @param {*} options
 * @returns (Component) => WrappedComponent
 */
export default function withViewPage({ renameProps }) {
  const defaultPropNames = {
    formData: 'formData',
    editing: 'editing',
    onFormDataChange: 'onFormDataChange'
  };
  const actualPropNameMapping = {
    ...defaultPropNames,
    ...renameProps
  };
  return WrappedComponent => {
    class ViewPageWrapper extends React.PureComponent {
      static displayName = `WithViewPage(${getDisplayName(WrappedComponent)})`;

      render() {
        const formData = this.props[actualPropNameMapping.formData];
        if (!formData) {
          return <LoadingIndicator />;
        }

        const cmpProps = {
          [actualPropNameMapping.formData]: formData,
          [actualPropNameMapping.editing]: false,
          [actualPropNameMapping.onFormDataChange]: () => {}
        };
        return (
          <div>
            <WrappedComponent {...this.props} {...cmpProps} />

            <Button component={Link} to={`${this.props.match.url}/edit`}>
              Edit
            </Button>
          </div>
        );
      }
    }

    return withRouter(ViewPageWrapper);
  };
}
