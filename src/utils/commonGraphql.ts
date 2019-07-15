import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import {
  UserCommonFragment,
  UpdateUserCommonMutation,
  GetUserQuery
} from '../generated-models';
import { useCustomQuery } from './hooks';

export const USER_COMMON_FRAGMENT = gql`
  fragment UserCommon on User {
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

export const GET_USER_COMMON = gql`
  query getUser($id: ID) {
    user: User(id: $id) {
      ...UserCommon
    }
  }
  ${USER_COMMON_FRAGMENT}
`;

export function useUser(id: string) {
  return useCustomQuery<GetUserQuery>(GET_USER_COMMON, {
    variables: { id }
  });
}

export const UPDATE_USER_COMMON = gql`
  mutation UpdateUserCommon(
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
      ...UserCommon
    }
  }
  ${USER_COMMON_FRAGMENT}
`;

function formatMemberForMutation(updatedUser: UserCommonFragment) {
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

export function useUpdateUser() {
  const updateUser = useMutation<UpdateUserCommonMutation>(UPDATE_USER_COMMON, {
    refetchQueries: ['editableUsersList']
  });

  return (user: UserCommonFragment) =>
    updateUser({
      variables: formatMemberForMutation(user)
    });
}
