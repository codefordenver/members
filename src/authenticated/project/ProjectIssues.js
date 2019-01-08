import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import ProjectIssue from './ProjectIssue';

const ProjectIssues = ({ issues }) => {
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
  query issues($repoName: String!) {
    issues(repoName: $repoName)
      @rest(
        type: "githubIssue"
        path: "repos/codefordenver/:repoName/issues?labels=ready"
        params: { repoName: $repoName }
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

export default graphql(issuesQuery, {
  options: props => ({
    variables: {
      repoName: props.repoName
    }
  }),
  props: ({ data: { issues } }) => {
    return { issues };
  }
})(ProjectIssues);
