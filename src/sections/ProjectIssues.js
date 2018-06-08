import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import ProjectIssue from './ProjectIssue';

const ProjectIssues = ({ issuesInfo }) => {
  return (
    <div>
      <h2>Issues</h2>
      {issuesInfo.objects &&
        issuesInfo.objects.map(issue => (
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
  query issues($id: String!) {
    issues(id: $id)
      @rest(
        type: "Issues"
        path: "projects/:id/issues"
        params: { id: $id }
        endpoint: "cfa"
      ) {
      objects
    }
  }
`;
/* eslint-enable graphql/template-strings */

export default graphql(issuesQuery, {
  options: props => ({
    variables: {
      id: props.cfapiProjectId
    }
  }),
  props: ({ data: { issues } }) => ({ issuesInfo: issues || {} })
})(ProjectIssues);
