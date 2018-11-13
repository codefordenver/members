/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: MemberProfileFragment
// ====================================================

export interface MemberProfileFragment_skills {
  __typename: 'Skill';
  id: string;
  name: string;
}

export interface MemberProfileFragment {
  __typename: 'User';
  id: string;
  picture: string | null;
  name: string | null;
  description: string | null;
  githubName: string | null;
  flowdockName: string | null;
  email: string;
  skills: MemberProfileFragment_skills[] | null;
}
