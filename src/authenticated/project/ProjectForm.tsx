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
import ProjectSection from './ProjectSection';
import { ProjectSectionFieldsFragment } from '../../generated-models';

type ProjectFormProps = {
  initialValues: ProjectSectionFieldsFragment;
  onSubmit?(
    newProject: ProjectSectionFieldsFragment,
    actions: FormikActions<ProjectSectionFieldsFragment>
  ): Promise<any>;
  editing?: true;
  creating?: true; // TODO type not both true
} & RouteComponentProps;

function getBaseUrl(history: History, creating?: boolean, editing?: boolean) {
  if (creating) {
    return history.location.pathname.split('/create')[0];
  }
  return history.location.pathname.split('/edit')[0];
}

const ProjectForm: React.FC<ProjectFormProps> = ({
  initialValues,
  onSubmit,
  history,
  match,
  editing,
  creating
}) => {
  if (editing && creating) {
    throw new TypeError(
      'Props `editing` and `creating` are not allowed at the same time'
    );
  }
  if ((!editing && !creating) || !onSubmit) {
    return (
      <React.Fragment>
        <ProjectSection
          project={initialValues}
          editing={false}
          onFormDataChange={() => {}}
        />
        <Button
          component={({ innerRef, ...props }) => (
            <Link to={`${match.url}/edit`} {...props} />
          )}
        >
          Edit
        </Button>
      </React.Fragment>
    );
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      render={({ values, dirty, handleChange, handleSubmit, isSubmitting }) => (
        <Form>
          <ProjectSection
            project={values}
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

export default withRouter(ProjectForm);
