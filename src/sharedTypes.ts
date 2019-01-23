export interface User {
  role: 'REGULAR' | 'ADMIN' | null;
}

export interface GitHubIssue {
  id: string;
  html_url: string;
  title: string;
  body: string;
}
