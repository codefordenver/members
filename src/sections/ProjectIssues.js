import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import ErrorBox from '../sections/ErrorBox';
import ProjectIssue from './ProjectIssue';

const ProjectIssues = ({ issues, error }) => {
  return (
    <div>
      <h2>Issues ready to be worked on</h2>
      {error ? (
        <ErrorBox>
          {'There was an error retrieving the project issues'}
        </ErrorBox>
      ) : (
        issues.map(issue => <ProjectIssue issue={issue} key={issue.id} />)
      )}
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
  props: ({ data: { issues, error } }) => {
    return { issues, error };
  }
})(ProjectIssues);
