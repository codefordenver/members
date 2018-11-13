/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: userEmails
// ====================================================

export interface userEmails_allUsers {
  __typename: 'User';
  id: string;
  email: string;
}

export interface userEmails {
  allUsers: userEmails_allUsers[];
}

export interface userEmailsVariables {
  date?: any | null;
}
