import React from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
// import withRestData from '../utils/withRestData';
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

export default graphql(issuesQuery, {
  options: props => ({
    variables: {
      id: props.cfapiProjectUrl.substring(
        props.cfapiProjectUrl.lastIndexOf('/') + 1
      )
    }
  }),
  props: ({ data: { issues } }) => ({ issuesInfo: issues || {} })
})(ProjectIssues);
