import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import ProjectIssue from './ProjectIssue';
import { getRepoPath } from '../../utils';
import { GitHubIssue } from '../../sharedTypes';

interface ProjectIssuesComponentProps {
  issues: GitHubIssue[];
  repoName: string;
}

const ProjectIssues: React.SFC<ProjectIssuesComponentProps> = ({ issues }) => {
  return (
    <div>
      <h2>Issues ready to be worked on</h2>
      {issues.map(issue => (
        <ProjectIssue issue={issue} key={issue.id} />
      ))}
    </div>
  );
};
ProjectIssues.defaultProps = {
  issues: []
};

/* eslint-disable graphql/template-strings */
const issuesQuery = gql`
  query issues($repoPath: String!) {
    issues(repoPath: $repoPath)
      @rest(
        type: "githubIssue"
        path: "repos/:repoPath/issues?labels=ready"
        params: { repoPath: $repoPath }
        endpoint: "github"
      ) {
      id
      html_url
      title
      body
    }
  }
`;
/* eslint-enable graphql/template-strings */

interface ProjectIssuesProps {
  repoName: string;
}
type Variables = {
  repoPath: string;
};
type ResponseData = { issues: GitHubIssue[] };
type ChildProps = { issues: GitHubIssue[] }; //ChildDataProps<ProjectIssuesProps, Response, Variables>;

export default graphql<ProjectIssuesProps, ResponseData, Variables, ChildProps>(
  issuesQuery,
  {
    options: (props: ProjectIssuesProps) => ({
      variables: {
        repoPath: getRepoPath(props.repoName)
      }
    }),
    props: ({ data: { issues = [] } = {} }) => {
      return { issues };
    }
  }
)(ProjectIssues);
