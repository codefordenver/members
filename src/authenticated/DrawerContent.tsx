import React from 'react';
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
import { useQuery } from 'react-apollo-hooks';
import gql from 'graphql-tag';
import { ProjectsDrawerQuery } from '../generated-models';

const styles = (theme: Theme) =>
  createStyles({
    navTitle: {
      textAlign: 'center',
      fontSize: '0.75em',
      fontWeight: 'bold'
    }
  });

const DRAWER_PROJECTS = gql`
  query projectsDrawer {
    allProjects(orderBy: name_ASC, filter: { status: ActiveDevelopment }) {
      id
      name
    }
  }
`;

type DrawerContentProps = WithStyles<typeof styles>;

const DrawerContent: React.FC<DrawerContentProps> = ({ classes }) => {
  const { data, error, loading } = useQuery<ProjectsDrawerQuery>(
    DRAWER_PROJECTS
  );
  if (error) return <div>Error! {error.message}</div>;
  if (loading || !data || !data.allProjects) return <LoadingIndicator />;
  const projects = data.allProjects;

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

export default withStyles(styles, { withTheme: true })(DrawerContent);
