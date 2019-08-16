import React, { useState } from 'react';
import {
  withStyles,
  WithStyles,
  WithTheme,
  Theme,
  createStyles
} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';

const drawerWidth = 300;

const styles = (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      zIndex: 1,
      position: 'relative',
      display: 'flex',
      width: '100%'
    },

    navIconHide: {
      height: '48px',
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
      padding: theme.spacing(3),
      width: '100%'
    }
  });

interface ResponsiveDrawerProps extends WithStyles<typeof styles>, WithTheme {
  drawer: JSX.Element;
}
interface ResponsiveDrawerState {
  mobileOpen: boolean;
}

const ResponsiveDrawer: React.FC<ResponsiveDrawerProps> = ({
  classes,
  theme,
  children,
  drawer
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(mobileOpen => !mobileOpen);
  };

  return (
    <div className={classes.root}>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleDrawerToggle}
        className={classes.navIconHide}
      >
        <MenuIcon />
      </IconButton>

      <Hidden mdUp>
        <Drawer
          variant="temporary"
          anchor={theme.direction === 'rtl' ? 'right' : 'left'}
          open={mobileOpen}
          onClose={handleDrawerToggle}
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
      <main className={classes.content}>{children}</main>
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);
