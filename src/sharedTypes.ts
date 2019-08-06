import { UserRole } from './generated-models';

export interface User {
  role?: UserRole | null;
  [key: string]: any;
}

export interface GitHubIssue {
  id: string;
  html_url: string;
  title: string;
  body: string;
}
