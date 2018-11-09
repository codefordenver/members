/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: users
// ====================================================

export interface users_allUsers {
  __typename: 'User';
  id: string;
  email: string;
}

export interface users {
  allUsers: users_allUsers[];
}

export interface usersVariables {
  date?: any | null;
}
