import React from 'react';
import Grid from '@material-ui/core/Grid';
import gql from 'graphql-tag';
import ProjectCard, { PROJECT_CARD_FIELDS } from './ProjectCard';
import { useCustomQuery } from '../../utils/hooks';
import {
  ProjectCardsAllProjects,
  ProjectCardsQuery
} from '../../generated-models';

interface ProjectsListProps {
  projects: ProjectCardsAllProjects[];
  loading: boolean;
}

const PROJECT_CARDS = gql`
  query projectCards {
    allProjects(orderBy: name_ASC) {
      ...ProjectCardFields
    }
  }
  ${PROJECT_CARD_FIELDS}
`;

const ProjectsListPage: React.FC<ProjectsListProps> = () => {
  const { data } = useCustomQuery<ProjectCardsQuery>(PROJECT_CARDS);
  if (!data || !data.allProjects) return null;

  const projects = data.allProjects;
  if (!projects.length) {
    return <p>No projects yet</p>;
  }

  return (
    <Grid container spacing={24}>
      {projects.map(project => (
        <Grid key={project.id} item sm={12} md={6} lg={4}>
          <ProjectCard key={project.id} {...project} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProjectsListPage;
