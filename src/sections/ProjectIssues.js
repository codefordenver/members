import React from 'react';
import withRestData from '../utils/withRestData';

const ProjectIssues = ({ issuesInfo }) => {
  return (
    issuesInfo.objects &&
    issuesInfo.objects.map(issue => (
      <div style={{ border: '1px solid red' }} key={issue.id}>
        <h2>
          <a href={issue.html_url}>{issue.title}</a>
        </h2>
        <p>{issue.body}</p>
      </div>
    ))
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
