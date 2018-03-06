import React from 'react';
import Button from 'material-ui/Button';
import { Link, withRouter, Prompt } from 'react-router-dom';
import getDisplayName from './getDisplayName';
import LoadingIndicator from '../sections/LoadingIndicator';

function getBaseUrl(props) {
  return props.match.url.split('/edit')[0];
}

/**
 * A Higher Order Component that takes options, then a component to wrap.
 * The result takes props:
 * - `formData`: the data to display in the form initially
 * - `onEdit`: a callback that will be called when the user submits. It is called with the formData
 * @param {*} options
 * @returns (Component) => WrappedComponent
 */
export default function withEditPage(options) {
  return WrappedComponent => {
    class EditPageWrapper extends React.PureComponent {
      static displayName = `WithEditPage(${getDisplayName(WrappedComponent)})`;

      state = {
        formData: this.props.formData || {},
        submitting: false,
        formIsDirty: false
      };

      componentWillReceiveProps(nextProps) {
        if (nextProps.formData !== this.props.formData) {
          this.setState({ formData: nextProps.formData });
        }
      }

      render() {
        if (!this.props.formData) {
          return <LoadingIndicator />;
        }

        const cmpProps = {
          formData: this.state.formData,
          editing: true,
          onFormDataChange: this._updateFormData
        };
        return (
          <form onSubmit={this._submitForm}>
            <WrappedComponent {...this.props} {...cmpProps} />

            <Prompt
              when={this.state.formIsDirty && !this.state.submitting}
              message="Warning, you have unsaved changes. Are you sure you want to leave?"
            />

            <Button component={Link} to={getBaseUrl(this.props)}>
              Cancel
            </Button>
            <Button onClick={this._submitForm} disabled={this.state.submitting}>
              Submit
            </Button>
          </form>
        );
      }

      _submitForm = async event => {
        if (event) {
          event.preventDefault();
        }
        try {
          this.setState({ submitting: true });
          await this.props.onEdit(this.state.formData);
          this.props.history.push(getBaseUrl(this.props));
        } catch (err) {
          this.setState({ submitting: false });
          alert(err);
        }
      };

      _updateFormData = event => {
        const { name, value } = event.target;
        this.setState(state => ({
          formData: {
            ...state.formData,
            [name]: value
          },
          formIsDirty: true
        }));
      };
    }

    return withRouter(EditPageWrapper);
  };
}
