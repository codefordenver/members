import React, { useState, Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import gql from 'graphql-tag';
import Select from 'react-select';

import ProjectCard, { PROJECT_CARD_FIELDS } from './ProjectCard';
import { useCustomQuery } from '../../utils/hooks';
import {
  ProjectCardFieldsFragment,
  ProjectCardsQuery
} from '../../generated-models';
import options from '../../constants/projectStatusOptions';

interface ProjectsListProps {
  projects: ProjectCardFieldsFragment[];
  loading: boolean;
}

type SelectOption = {
  value: string;
  label: string;
};

const PROJECT_CARDS = gql`
  query projectCards {
    allProjects(orderBy: name_ASC) {
      ...ProjectCardFields
    }
  }
  ${PROJECT_CARD_FIELDS}
`;

const ProjectsListPage: React.FC<ProjectsListProps> = () => {
  const [selectedProjectTypes, setSelectedProjectTypes] = useState<
    SelectOption | SelectOption[] | null
  >(null);
  const { data } = useCustomQuery<ProjectCardsQuery>(PROJECT_CARDS);

  if (!data || !data.allProjects) return null;
  const { allProjects } = data;
  if (!allProjects.length) return <p>No projects yet</p>;

  const _handleSelectionChange = (
    selectedOption?: SelectOption | SelectOption[] | null
  ) => setSelectedProjectTypes(selectedOption ? selectedOption : null);

  const filteredProjects = allProjects
    .filter(project => {
      if (selectedProjectTypes instanceof Array) return true;
      if (selectedProjectTypes === null) return true;

      return project.status === selectedProjectTypes.value;
    })
    .map(project => (
      <Grid key={project.id} item sm={12} md={6} lg={4}>
        <ProjectCard key={project.id} {...project} />
      </Grid>
    ));

  return (
    <Fragment>
      <Select
        options={options}
        placeholder="ALL PROJECTS"
        onChange={_handleSelectionChange}
        value={selectedProjectTypes}
        isClearable
      />
      <Grid container spacing={24}>
        {filteredProjects.length ? filteredProjects : null}
      </Grid>
      {!filteredProjects.length && (
        <p>
          <br />
          No projects match your search criteria
        </p>
      )}
    </Fragment>
  );
};

export default ProjectsListPage;
