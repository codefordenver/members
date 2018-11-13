/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getUser
// ====================================================

export interface getUser_user_skills {
  __typename: 'Skill';
  id: string;
  name: string;
}

export interface getUser_user {
  __typename: 'User';
  id: string;
  picture: string | null;
  name: string | null;
  description: string | null;
  githubName: string | null;
  flowdockName: string | null;
  email: string;
  skills: getUser_user_skills[] | null;
}

export interface getUser {
  user: getUser_user | null;
}

export interface getUserVariables {
  id?: string | null;
}
