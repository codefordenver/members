/* tslint:disable */
// This file was automatically generated and should not be edited.

import { ProjectStatus } from './../../../../__generated__/globalTypes';

// ====================================================
// GraphQL fragment: ProjectCardFields
// ====================================================

export interface ProjectCardFields_skills {
  __typename: 'Skill';
  id: string;
  name: string;
}

export interface ProjectCardFields {
  __typename: 'Project';
  id: string;
  name: string;
  headerImage: string | null;
  repoName: string | null;
  status: ProjectStatus | null;
  skills: ProjectCardFields_skills[] | null;
}
