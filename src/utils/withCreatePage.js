import React from 'react';
import Button from 'material-ui/Button';
import { Link, withRouter, Prompt } from 'react-router-dom';
import getDisplayName from './getDisplayName';

function getBaseUrl(props) {
  return props.match.url.split('/create')[0];
}

/**
 * A Higher Order Component that takes options, then a component to wrap.
 * The result takes props:
 * - `onCreate`: a callback that will be called when the user submits. It is called with the formData
 * @param {*} options
 * @returns (Component) => WrappedComponent
 */
export default function withCreatePage(options) {
  return WrappedComponent => {
    class CreatePageWrapper extends React.PureComponent {
      static displayName = `WithCreatePage(${getDisplayName(
        WrappedComponent
      )})`;

      state = {
        formData: {},
        submitting: false,
        formIsDirty: false
      };

      render() {
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
              Create
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
          await this.props.onCreate(this.state.formData);
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

    return withRouter(CreatePageWrapper);
  };
}
