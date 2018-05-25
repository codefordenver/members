import React from 'react';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
import ListItem from 'material-ui/List/ListItem';
import ListItemText from 'material-ui/List/ListItemText';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import Divider from 'material-ui/Divider';
import Icon from 'material-ui/Icon';
import { Link } from 'react-router-dom';
import './Menu.css'; /*Need to only add material icon sets */

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%'
  },

  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative'
    }
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3
  }
});

class ResponsiveDrawer extends React.Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, theme, projects } = this.props;

    const drawer = (
      <div>
        <Divider />
        <List component="nav">
          {projects.map(project => (
            <ListItem
              button
              key={project.id}
              component={Link}
              to={`/projects/${project.id}`}
            >
              <ListItemText primary={project.name} />
            </ListItem>
          ))}
        </List>
      </div>
    );

    return (
      <div className={classes.root}>
        {/* <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerToggle}
              className={classes.navIconHide}
            >
              <Icon> menu </Icon>
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              Responsive drawer
            </Typography>
          </Toolbar>
        </AppBar> */}
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={this.handleDrawerToggle}
            className={classes.navIconHide}
          >
            <Icon> menu </Icon>
          </IconButton>
        </Toolbar>

        <Hidden mdUp>
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={this.state.mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden smDown implementation="css">
          <Drawer
            variant="permanent"
            open
            classes={{
              paper: classes.drawerPaper
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <main className={classes.content}>
          <Typography noWrap>{''}</Typography>
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
