export interface User {
  role?: 'REGULAR' | 'ADMIN';
}

export interface GitHubIssue {
  html_url: string;
  title: string;
  body: string;
}
