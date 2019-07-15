import { useMutation } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import {
  UserCommonFragment,
  UpdateUserCommonMutation,
  GetUserCommonQuery,
  GetProjectCommonQuery,
  UpdateProjectCommonMutation,
  ProjectCommonFragment,
  CreateProjectCommonMutation
} from '../generated-models';
import { useCustomQuery } from './hooks';

/**********************************
 * Common User GraphQL
 **********************************/

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
  query getUserCommon($id: ID) {
    user: User(id: $id) {
      ...UserCommon
    }
  }
  ${USER_COMMON_FRAGMENT}
`;

export function useUserCommon(id: string) {
  return useCustomQuery<GetUserCommonQuery>(GET_USER_COMMON, {
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

function formatMemberForUpdate(updatedUser: UserCommonFragment) {
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

export function useUpdateUserCommon() {
  const updateUser = useMutation<UpdateUserCommonMutation>(UPDATE_USER_COMMON, {
    refetchQueries: ['editableUsersList']
  });

  return (user: UserCommonFragment) =>
    updateUser({
      variables: formatMemberForUpdate(user)
    });
}

/**********************************
 * Common Project GraphQL
 **********************************/

export const PROJECT_COMMON_FRAGMENT = gql`
  fragment ProjectCommon on Project {
    id
    name
    headerImage
    description
    repoName
    boardUrl
    status
    skills {
      id
      name
    }
    champions {
      id
      name
    }
  }
`;

export const GET_PROJECT_COMMON = gql`
  query getProjectCommon($id: ID!) {
    Project(id: $id) {
      ...ProjectCommon
    }
  }
  ${PROJECT_COMMON_FRAGMENT}
`;

export function useProjectCommon(id: string) {
  return useCustomQuery<GetProjectCommonQuery>(GET_PROJECT_COMMON, {
    variables: { id }
  });
}

export const UPDATE_PROJECT_COMMON = gql`
  mutation UpdateProjectCommon(
    $id: ID!
    $name: String!
    $headerImage: String
    $description: String
    $repoName: String
    $boardUrl: String
    $skillsIds: [ID!]
    $championsIds: [ID!]
    $status: ProjectStatus
  ) {
    updateProject(
      id: $id
      name: $name
      headerImage: $headerImage
      description: $description
      repoName: $repoName
      boardUrl: $boardUrl
      skillsIds: $skillsIds
      championsIds: $championsIds
      status: $status
    ) {
      ...ProjectCommon
    }
  }
  ${PROJECT_COMMON_FRAGMENT}
`;

function formatProjectForUpdate(updatedProject: ProjectCommonFragment) {
  return {
    ...updatedProject,
    skillsIds:
      updatedProject.skills && updatedProject.skills.map(skill => skill.id),
    championsIds:
      updatedProject.champions &&
      updatedProject.champions.map(champion => champion.id)
  };
}

export function useUpdateProjectCommon() {
  const updateProject = useMutation<UpdateProjectCommonMutation>(
    UPDATE_PROJECT_COMMON,
    {
      // TODO: Verify these refetch queries are correct
      // or possibly look into some way that we don't have to worry about refetching
      refetchQueries: ['editableUsersList']
    }
  );

  return (project: ProjectCommonFragment) =>
    updateProject({
      variables: formatProjectForUpdate(project)
    });
}

export const CREATE_PROJECT_COMMON = gql`
  mutation CreateProjectCommon(
    $name: String!
    $headerImage: String
    $description: String
    $repoName: String!
    $boardUrl: String
    $skillsIds: [ID!]
    $championsIds: [ID!]
    $status: ProjectStatus
  ) {
    createProject(
      name: $name
      headerImage: $headerImage
      description: $description
      repoName: $repoName
      boardUrl: $boardUrl
      skillsIds: $skillsIds
      championsIds: $championsIds
      status: $status
    ) {
      ...ProjectCommon
    }
  }
  ${PROJECT_COMMON_FRAGMENT}
`;

function formatNewProjectForCreate(newProject: ProjectCommonFragment) {
  if (!newProject.repoName) {
    throw new Error('Projects require a specified repo name');
  }
  const { id, skills, champions, ...newProjectSansUnusedFields } = newProject;
  return {
    ...newProjectSansUnusedFields,
    skillsIds: newProject.skills
      ? newProject.skills.map(skill => skill.id)
      : [],
    championsIds: newProject.champions
      ? newProject.champions.map(champion => champion.id)
      : [],
    repoName: newProject.repoName // Typescript was complaining without this
  };
}

export function useCreateProjectCommon() {
  const createProject = useMutation<CreateProjectCommonMutation>(
    CREATE_PROJECT_COMMON,
    {
      // TODO: These didn't exist before, check if they are actually needed
      refetchQueries: ['projectCards', 'projectsDrawer', 'editableUsersList']
    }
  );

  return (newProject: ProjectCommonFragment) =>
    createProject({
      variables: formatNewProjectForCreate(newProject)
    });
}
