/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: usersList
// ====================================================

export interface usersList_allUsers {
  __typename: 'User';
  id: string;
  name: string | null;
  picture: string | null;
}

export interface usersList {
  allUsers: usersList_allUsers[];
}
