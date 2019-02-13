import React from 'react';
import { MutationFn } from 'react-apollo';
// import withCreatePage from '../../utils/withCreatePage';
import {
  Link,
  withRouter,
  RouteComponentProps,
  Prompt
} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Formik } from 'formik';
import { History } from 'history';
import ProjectSection from './ProjectSection';
import {
  // CreateProjectHOC,
  CreateProjectComponent,
  ProjectSectionFieldsFragment,
  CreateProjectMutation,
  CreateProjectVariables
} from '../../generated-models';

function getBaseUrl(history: History) {
  return history.location.pathname.split('/create')[0];
}

// interface ProjectCreatePageProps {
//   history: History;
// }

const createProject = async (
  createProjectMutation: MutationFn<
    CreateProjectMutation,
    CreateProjectVariables
  >,
  history: History,
  newProject: ProjectSectionFieldsFragment,
  actions: { setSubmitting(val: boolean): void }
) => {
  try {
    if (!newProject.repoName) {
      throw new Error('Projects require a specified repo name');
    }
    const { skills, champions, ...newProjectSansUnusedFields } = newProject;

    await createProjectMutation({
      variables: {
        ...newProjectSansUnusedFields,
        skillsIds: newProject.skills
          ? newProject.skills.map(skill => skill.id)
          : [],
        championsIds: newProject.champions
          ? newProject.champions.map(champion => champion.id)
          : [],
        repoName: newProject.repoName // Typescript was complaining without this
      }
    });
    history.push(getBaseUrl(history));
  } catch (err) {
    actions.setSubmitting(false);
    alert(err);
  }
};

const ProjectCreatePage: React.SFC<RouteComponentProps<{}>> = ({ history }) => {
  return (
    <CreateProjectComponent>
      {createProjectMutation => (
        <Formik
          initialValues={{
            id: '',
            name: '',
            headerImage: '',
            description: '',
            repoName: '',
            skills: [],
            champions: []
          }}
          onSubmit={(newProject, actions) =>
            createProject(createProjectMutation, history, newProject, actions)
          }
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
            <form onSubmit={handleSubmit}>
              <ProjectSection
                project={values}
                editing={true}
                onFormDataChange={handleChange}
              />

              <Prompt
                when={touched && !isSubmitting}
                message="Warning, you have unsaved changes. Are you sure you want to leave?"
              />

              <Button
                component={({ innerRef, ...props }) => (
                  <Link to={getBaseUrl(history)} {...props} />
                )}
              >
                Cancel
              </Button>
              <Button onClick={() => handleSubmit()} disabled={isSubmitting}>
                Create
              </Button>
            </form>
          )}
        />
      )}
    </CreateProjectComponent>
  );
};

export default withRouter(ProjectCreatePage);

// const ProjectCreatePage = compose(
//   CreateProjectHOC({
//     props: ({ mutate }) => ({
//       onCreate: (newProject: ProjectSectionFieldsFragment) => {
//         if (!newProject.repoName) {
//           throw new Error('Projects require a specified repo name');
//         }
//         const { skills, champions, ...newProjectSansUnusedFields } = newProject;

//         return (
//           mutate &&
//           mutate({
//             variables: {
//               ...newProjectSansUnusedFields,
//               skillsIds: newProject.skills
//                 ? newProject.skills.map(skill => skill.id)
//                 : [],
//               championsIds: newProject.champions
//                 ? newProject.champions.map(champion => champion.id)
//                 : [],
//               repoName: newProject.repoName // Typescript was complaining without this
//             }
//           })
//         );
//       }
//     }),
//     options: {
//       refetchQueries: ['projects']
//     }
//   }),
//   withCreatePage({
//     renameProps: {
//       formData: 'project'
//     }
//   })
// )(ProjectSection);

// export default ProjectCreatePage;
