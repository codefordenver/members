import React from 'react';
import { graphql, compose } from 'react-apollo';
import { withStyles } from '@material-ui/core/styles';
import gql from 'graphql-tag';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import ListSubheader from '@material-ui/core/ListSubheader';
import LoadingIndicator from '../shared-components/LoadingIndicator';

const DrawerContent = ({ projects, loading, classes }) => {
  if (loading) {
    return <LoadingIndicator />;
  }
  return (
    <div>
      <List
        component="nav"
        subheader={
          <ListSubheader component="div" className={classes.navTitle}>
            ACTIVE PROJECTS
          </ListSubheader>
        }
      >
        <Divider />
        {projects &&
          projects.map(project => (
            <React.Fragment key={project.id}>
              <ListItem button component={Link} to={`/projects/${project.id}`}>
                <ListItemText primary={project.name} />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
      </List>
    </div>
  );
};

const styles = theme => ({
  navTitle: {
    textAlign: 'center',
    fontSize: '0.75em',
    fontWeight: 'bold'
  }
});

const allProjectsQuery = gql`
  query projects {
    allProjects(orderBy: name_ASC) {
      # TODO: Only show active projects
      id
      name
    }
  }
`;

const DrawerContentWithData = compose(
  withStyles(styles, { withTheme: true }),
  graphql(allProjectsQuery, {
    options: () => ({}),
    props: ({ data: { allProjects, loading } }) => ({
      projects: allProjects,
      loading
    })
  })
)(DrawerContent);

export default DrawerContentWithData;
