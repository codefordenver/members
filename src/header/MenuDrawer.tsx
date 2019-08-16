import React, { Fragment } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import {
  ListSubheader,
  List,
  Drawer,
  Button,
  IconButton,
  ListItem,
  ListItemText,
  Divider,
  Box
} from '@material-ui/core';
import { Menu as MenuIcon, Close } from '@material-ui/icons';
import Logo from '../images/logo-red-2x.png';
import AuthService from '../utils/authentication/authService';
import { Link } from 'react-router-dom';
import userIsAdmin from '../utils/userIsAdmin';
import { useUserCommon } from '../utils/commonGraphql';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    },
    list: {
      width: 350
    },
    logo: {
      height: '46px'
    },
    drawerHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '16px',
      borderBottom: `1px solid ${theme.palette.primary.main}`
    },
    listItem: {
      fontWeight: 'bold',
      fontSize: '28px',
      lineHeight: '33px',
      margin: '16px',
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    link: {
      textDecoration: 'none',
      '&:visited': {
        color: 'initial'
      }
    }
  })
);

const ListItemLink: React.FC<{ to: string }> = ({ children, to }) => {
  const classes = useStyles();

  return (
    <Fragment>
      <ListItem button>
        <ListItemText className={classes.listItem} disableTypography>
          <Link className={classes.link} to={to}>
            {children}
          </Link>
        </ListItemText>
      </ListItem>
      <Divider />
    </Fragment>
  );
};

const MenuDrawer: React.FC<{ userId: string }> = ({ userId }) => {
  const classes = useStyles();
  const [state, setState] = React.useState({ left: false });
  const { logout } = AuthService;
  const { data } = useUserCommon(userId);

  if (!data || !data.user) return null;
  const { user } = data;

  type DrawerSide = 'left';
  const toggleDrawer = (side: DrawerSide, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    )
      return;

    setState({ ...state, [side]: open });
  };

  return (
    <Box className={classes.root}>
      <IconButton onClick={toggleDrawer('left', true)} color="inherit">
        <MenuIcon />
      </IconButton>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        <Box className={classes.drawerHeader}>
          <img src={Logo} alt="Code for Denver logo" className={classes.logo} />
          <IconButton
            color="primary"
            size="medium"
            onClick={toggleDrawer('left', false)}
          >
            <Close />
          </IconButton>
        </Box>
        <List className={classes.list}>
          <ListItemLink to="/me">PROFILE</ListItemLink>
          <ListItemLink to="/volunteers">VOLUNTEERS</ListItemLink>
          <ListItemLink to="/projects">PROJECTS</ListItemLink>
          {userIsAdmin(user || undefined) && (
            <ListItemLink to="/admin">ADMIN</ListItemLink>
          )}
          <ListItem button onClick={logout}>
            <ListItemText disableTypography className={classes.listItem}>
              LOG OUT
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default MenuDrawer;
