import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import './Menu.css';

class FadeMenu extends React.Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'fade-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          color="secondary"
        >
          <Avatar src={this.props.avatar} alt={this.props.username} />
          <span className="Menu-username"> {this.props.username} </span>
          <ArrowDropDown />
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose} component={Link} to="/me">
            PROFILE
          </MenuItem>
          <MenuItem onClick={this.props.logout}>LOG OUT</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default FadeMenu;
