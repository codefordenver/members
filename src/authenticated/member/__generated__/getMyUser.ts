/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getMyUser
// ====================================================

export interface getMyUser_user_skills {
  __typename: 'Skill';
  id: string;
  name: string;
}

export interface getMyUser_user {
  __typename: 'User';
  id: string;
  picture: string | null;
  name: string | null;
  description: string | null;
  githubName: string | null;
  flowdockName: string | null;
  email: string;
  skills: getMyUser_user_skills[] | null;
}

export interface getMyUser {
  user: getMyUser_user | null;
}

export interface getMyUserVariables {
  id?: string | null;
}
