import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Manager, Target, Popper } from 'react-popper';
import Avatar from 'material-ui/Avatar';
import Icon from 'material-ui/Icon';
import Button from 'material-ui/Button';
import Grow from 'material-ui/transitions/Grow';
import Paper from 'material-ui/Paper';
import { MenuItem, MenuList } from 'material-ui/Menu';
import { withStyles } from 'material-ui/styles';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';
import { Link } from 'react-router-dom';

import './Menu.css';

const styles = theme => ({
  root: {
    display: 'flex'
  },
  paper: {
    marginRight: theme.spacing.unit * 2
  },
  popperClose: {
    pointerEvents: 'none'
  }
});

class MenuListComposition extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: props.avatar,
      username: props.username,
      logout: props.logout
    };
  }

  state = {
    open: false
  };

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };

  handleClose = event => {
    if (this.target1.contains(event.target)) {
      return;
    }

    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <Manager>
          <Target>
            <div
              ref={node => {
                this.target1 = node;
              }}
            >
              <Button
                aria-owns={open ? 'menu-list-grow' : null}
                aria-haspopup="true"
                onClick={this.handleToggle}
                color="secondary"
              >
                <Avatar src={this.state.avatar} alt={this.state.username} />
                <span className="username"> {this.state.username} </span>
                <Icon className={classes.icon}> arrow_drop_down </Icon>
              </Button>
            </div>
          </Target>
          <Popper
            placement="bottom"
            eventsEnabled={open}
            className={classNames({ [classes.popperClose]: !open })}
          >
            <ClickAwayListener onClickAway={this.handleClose}>
              <Grow
                in={open}
                id="menu-list-grow"
                style={{ transformOrigin: '0 0 0' }}
              >
                <Paper>
                  <MenuList role="menu">
                    <Link to="/me" style={{ textDecoration: 'none' }}>
                      <MenuItem onClick={this.handleClose}>PROFILE</MenuItem>
                    </Link>

                    <MenuItem onClick={this.state.logout}>LOG OUT</MenuItem>
                  </MenuList>
                </Paper>
              </Grow>
            </ClickAwayListener>
          </Popper>
        </Manager>
      </div>
    );
  }
}

MenuListComposition.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuListComposition);
