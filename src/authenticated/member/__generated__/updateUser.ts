/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: updateUser
// ====================================================

export interface updateUser_updateUser_skills {
  __typename: 'Skill';
  id: string;
  name: string;
}

export interface updateUser_updateUser {
  __typename: 'User';
  id: string;
  picture: string | null;
  name: string | null;
  description: string | null;
  githubName: string | null;
  flowdockName: string | null;
  email: string;
  skills: updateUser_updateUser_skills[] | null;
}

export interface updateUser {
  updateUser: updateUser_updateUser | null;
}

export interface updateUserVariables {
  id: string;
  name?: string | null;
  githubName?: string | null;
  flowdockName?: string | null;
  description?: string | null;
  skillsIds?: string[] | null;
}
