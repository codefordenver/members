export interface User {
  role?: 'REGULAR' | 'ADMIN';
}

export interface GitHubIssue {
  id: string;
  html_url: string;
  title: string;
  body: string;
}
