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
  query issues {
    issues
      @rest(type: "Issues", path: "projects/46275/issues", endpoint: "cfa") {
      objects
    }
  }
`;

export default graphql(issuesQuery, {
  props: ({ data: { issues } }) => ({ issuesInfo: issues || {} })
})(ProjectIssues);
