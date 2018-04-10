import React from 'react';
import withRestData from '../utils/withRestData';
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

export default withRestData(({ cfapiProjectUrl }) => {
  if (cfapiProjectUrl) {
    return {
      issuesInfo: cfapiProjectUrl + '/issues'
    };
  }
  return {};
})(ProjectIssues);
