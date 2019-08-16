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
import MemberProfile from './MemberProfile';
import { UserCommonFragment } from '../../generated-models';

function getBaseUrl(history: History, creating?: boolean, editing?: boolean) {
  if (creating) {
    return history.location.pathname.split('/create')[0];
  }
  return history.location.pathname.split('/edit')[0];
}

type MemberFormProps = {
  initialValues: UserCommonFragment;
  onSubmit?(
    newMember: UserCommonFragment,
    actions: FormikActions<UserCommonFragment>
  ): Promise<any>;
  editing?: true;
  creating?: true; // TODO type not both true
  canEdit?: true;
} & RouteComponentProps;

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
          <Button>
            <Link to={`${match.url}/edit`}>Edit</Link>
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

          <Button>
            <Link to={getBaseUrl(history, creating, editing)} />
            Cancel
          </Button>
          <Button onClick={() => handleSubmit()} disabled={isSubmitting}>
            {creating && 'Create'}
            {editing && 'Save'}
          </Button>
        </Form>
      )}
    />
  );
};

export default withRouter(MemberForm);
