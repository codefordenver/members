import React from 'react';
import './ProjectIssue.css';

const ProjectIssue = ({ issue }) => (
  <div className="ProjectIssue">
    <h2>
      <a href={issue.html_url}>{issue.title}</a>
    </h2>
    <p>{issue.body}</p>
  </div>
);

export default ProjectIssue;
