import React from 'react';
import { compose } from 'react-apollo';
import {
  withStyles,
  Theme,
  createStyles,
  WithStyles
} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import ListSubheader from '@material-ui/core/ListSubheader';
import LoadingIndicator from '../shared-components/LoadingIndicator';
import {
  ProjectsDrawerHOC,
  ProjectsDrawerAllProjects
} from '../generated-models';

interface DrawerContentProps extends WithStyles<typeof styles> {
  projects: ProjectsDrawerAllProjects[];
  loading: boolean;
}

const DrawerContent: React.SFC<DrawerContentProps> = ({
  projects,
  loading,
  classes
}) => {
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
              <ListItem
                button
                component={({ innerRef, ...props }) => (
                  <Link to={`/projects/${project.id}`} {...props} />
                )}
              >
                <ListItemText primary={project.name} />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
      </List>
    </div>
  );
};

const styles = (theme: Theme) =>
  createStyles({
    navTitle: {
      textAlign: 'center',
      fontSize: '0.75em',
      fontWeight: 'bold'
    }
  });

const DrawerContentWithData = compose(
  withStyles(styles, { withTheme: true }),
  ProjectsDrawerHOC({
    options: () => ({}),
    props: ({ data: { allProjects = [], loading = true } = {} }) => ({
      projects: allProjects,
      loading
    })
  })
)(DrawerContent);

export default DrawerContentWithData;
