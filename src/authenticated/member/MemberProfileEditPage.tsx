import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { History } from 'history';
import gql from 'graphql-tag';
import { GET_USER } from './MyProfilePage';
import AuthenticationContext from '../../utils/authentication/authContext';
import { useMutation } from 'react-apollo-hooks';
import { useCustomQuery } from '../../utils/hooks';
import MemberForm, { MEMBER_FORM_FRAGMENT } from './MemberForm';
import {
  MemberProfileFragmentFragment,
  GetUserQuery,
  UpdateUserMutation
} from '../../generated-models';

export const UPDATE_USER = gql`
  mutation updateUser(
    $id: ID!
    $name: String
    $githubName: String
    $flowdockName: String
    $description: String
    $hasCompletedWizard: Boolean
    $skillsIds: [ID!]
    $projectsChampionedIds: [ID!]
  ) {
    updateUser(
      id: $id
      name: $name
      githubName: $githubName
      flowdockName: $flowdockName
      description: $description
      hasCompletedWizard: $hasCompletedWizard
      skillsIds: $skillsIds
      projectsChampionedIds: $projectsChampionedIds
    ) {
      ...MemberProfileFragment
    }
  }
  ${MEMBER_FORM_FRAGMENT}
`;

type MemberEditPageProps = RouteComponentProps;

function formatMemberForMutation(updatedUser: MemberProfileFragmentFragment) {
  const skillsIds =
    updatedUser.skills && updatedUser.skills.map(skill => skill.id);
  const projectsChampionedIds =
    updatedUser.projectsChampioned &&
    updatedUser.projectsChampioned.map(project => project.id);
  return {
    ...updatedUser,
    skillsIds,
    projectsChampionedIds
  };
}

function getBaseUrl(history: History) {
  return history.location.pathname.split('/edit')[0];
}

const MemberEditPage: React.FC<MemberEditPageProps> = ({ history }) => {
  const authContext = useContext(AuthenticationContext);
  const updateMemberMutation = useMutation<UpdateUserMutation>(UPDATE_USER, {
    refetchQueries: ['editableUsersList']
  });
  const { data } = useCustomQuery<GetUserQuery>(GET_USER, {
    variables: { id: authContext.authData.userId }
  });
  if (!data || !data.user) return null;

  return (
    <MemberForm
      initialValues={data.user}
      editing
      onSubmit={async (updatedMember, actions) => {
        try {
          await updateMemberMutation({
            variables: formatMemberForMutation(updatedMember)
          });
          history.push(getBaseUrl(history));
        } catch (err) {
          console.error('submitting error', err);
          actions.setSubmitting(false);
          alert(err);
        }
      }}
    />
  );
};

export default MemberEditPage;
