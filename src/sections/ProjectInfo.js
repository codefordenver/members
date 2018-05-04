import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function githubLanguages(githubURL) {
  const replaceString = 'https://github.com/';
  const apiString = 'https://api.github.com/repos/';
  const apiURL = githubURL.replace(replaceString, apiString);
  const request = axios.get(apiURL);

  request
    .then(result => {
      console.log(result.data.languages_url);
      return result.data.languages_url;
    })
    .catch(error => {
      console.error(error);
      return Promise.reject(error);
    });

  //console.log(request.data.languages_url);

  return apiURL;
}

export default props => {
  const project = props.projectInfo;
  return (
    <div>
      <li key={project.id}>
        <Link to={`/projects/${project.id}`}>{project.name}</Link>
        <div> {project.githubURL} </div>
        <div> {githubLanguages(project.githubURL)} </div>
      </li>
    </div>
  );
};
