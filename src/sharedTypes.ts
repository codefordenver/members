import {
  UserRole,
  MemberProfileFragmentFragment,
  MemberProfileFragmentFragmentDoc
} from './generated-models';

export interface User {
  role: UserRole | null;
  [key: string]: any;
}

export interface GitHubIssue {
  html_url: string;
  title: string;
  body: string;
}
