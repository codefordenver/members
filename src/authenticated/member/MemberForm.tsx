import React from 'react';
import { Formik, FormikActions, Form } from 'formik';
import {
  Link,
  withRouter,
  RouteComponentProps,
  Prompt
} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { History } from 'history';
import gql from 'graphql-tag';
import MemberProfile from './MemberProfile';
import { MemberProfileFragmentFragment } from '../../generated-models';

type MemberFormProps = {
  initialValues: MemberProfileFragmentFragment;
  onSubmit?(
    newMember: MemberProfileFragmentFragment,
    actions: FormikActions<MemberProfileFragmentFragment>
  ): Promise<any>;
  editing?: true;
  creating?: true; // TODO type not both true
  canEdit?: true;
} & RouteComponentProps;

function getBaseUrl(history: History, creating?: boolean, editing?: boolean) {
  if (creating) {
    return history.location.pathname.split('/create')[0];
  }
  return history.location.pathname.split('/edit')[0];
}

export const MEMBER_FORM_FRAGMENT = gql`
  fragment MemberProfileFragment on User {
    id
    createdAt
    picture
    name
    description
    githubName
    flowdockName
    role
    email
    hasCompletedWizard
    skills {
      id
      name
    }
    projectsChampioned {
      id
      name
    }
  }
`;

const MemberForm: React.FC<MemberFormProps> = ({
  initialValues,
  onSubmit,
  history,
  match,
  editing,
  creating,
  canEdit
}) => {
  if (editing && creating) {
    throw new TypeError(
      'Props `editing` and `creating` are not allowed at the same time'
    );
  }
  if ((!editing && !creating) || !onSubmit) {
    return (
      <React.Fragment>
        <MemberProfile
          user={initialValues}
          editing={false}
          onFormDataChange={() => {}}
        />
        {canEdit && (
          <Button
            component={({ innerRef, ...props }) => (
              <Link to={`${match.url}/edit`} {...props} />
            )}
          >
            Edit
          </Button>
        )}
      </React.Fragment>
    );
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      render={({ values, dirty, handleChange, handleSubmit, isSubmitting }) => (
        <Form>
          <MemberProfile
            user={values}
            editing={true}
            onFormDataChange={handleChange}
          />

          <Prompt
            when={dirty && !isSubmitting}
            message="Warning, you have unsaved changes. Are you sure you want to leave?"
          />

          <Button
            component={({ innerRef, ...props }) => (
              <Link to={getBaseUrl(history, creating, editing)} {...props} />
            )}
          >
            Cancel
          </Button>
          <Button onClick={() => handleSubmit()} disabled={isSubmitting}>
            {creating && 'Create'}
            {editing && 'Edit'}
          </Button>
        </Form>
      )}
    />
  );
};

export default withRouter(MemberForm);
