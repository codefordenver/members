import React from 'react';
import Button from '@material-ui/core/Button';
import { Link, withRouter, Prompt } from 'react-router-dom';
import getDisplayName from './getDisplayName';
import { Formik, FormikProps, useField } from 'formik';

function getBaseUrl(props) {
  return props.history.location.pathname.split('/create')[0];
}

const MyTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props.name);
  return (
    <>
      <label>
        {label}
        <input {...field} {...props} />
      </label>
      {meta.touch && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};

/**
 * A Higher Order Component that takes options, then a component to wrap.
 * The result takes props:
 * - `onCreate`: a callback that will be called when the user submits. It is called with the formData
 * @param {*} options
 * @returns (Component) => WrappedComponent
 */
export default function withCreatePage({ renameProps }) {
  const propNameMapping = {
    formData: 'formData',
    editing: 'editing',
    onFormDataChange: 'onFormDataChange',
    ...renameProps
  };

  return WrappedComponent => {
    class CreatePageWrapper extends React.Component {
      static displayName = `WithCreatePage(${getDisplayName(
        WrappedComponent
      )})`;

      state = {
        formData: {},
        submitting: false,
        formIsDirty: false
      };

      render() {
        // const cmpProps = {
        //   [propNameMapping.formData]: this.state.formData,
        //   [propNameMapping.editing]: true,
        //   [propNameMapping.onFormDataChange]: this._updateFormData
        // };
        return (
          <Formik
            initialValues={this.state.formData}
            onSubmit={async (values, actions) => {
              try {
                // this.setState({ submitting: true });
                await this.props.onCreate(values);
                this.props.history.push(getBaseUrl(this.props));
              } catch (err) {
                // this.setState({ submitting: false });
                actions.setSubmitting(false);
                alert(err);
              }
              // await this.props.onCreate(values);
              // setTimeout(() => {
              //   alert(JSON.stringify(values, null, 2));
              //   actions.setSubmitting(false);
              // }, 1000);
            }}
            render={({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting
              /* and other goodies */
            }) => (
              // <form onSubmit={props.handleSubmit}>
              //   <MyTextField name="firstName" type="text" label="First Name" />
              //   <MyTextField name="lastName" type="text" label="Last Name" />
              //   <MyTextField name="email" type="email" label="Email" />
              //   <button type="submit">Submit</button>
              // </form>
              <form onSubmit={handleSubmit}>
                <WrappedComponent
                  {...this.props}
                  {...{
                    [propNameMapping.formData]: values,
                    [propNameMapping.editing]: true,
                    [propNameMapping.onFormDataChange]: handleChange
                  }}
                />

                <Prompt
                  when={touched && !isSubmitting}
                  message="Warning, you have unsaved changes. Are you sure you want to leave?"
                />

                <Button component={Link} to={getBaseUrl(this.props)}>
                  Cancel
                </Button>
                <Button onClick={handleSubmit} disabled={isSubmitting}>
                  Create
                </Button>
              </form>
            )}
          />
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

      // _updateFormData = event => {
      //   const { name, value } = event.target;
      //   this.setState(state => ({
      //     formData: {
      //       ...state.formData,
      //       [name]: value
      //     },
      //     formIsDirty: true
      //   }));
      // };
    }

    return withRouter(CreatePageWrapper);
  };
}
