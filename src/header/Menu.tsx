import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import './Menu.css';

interface FadeMenuProps {
  avatar: string | null;
  username: string | null;
  logout: () => void;
}

class FadeMenu extends React.Component<FadeMenuProps> {
  state = {
    anchorEl: null
  };

  handleClick = (event: React.MouseEvent<HTMLElement>) => {
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
          aria-owns={anchorEl ? 'fade-menu' : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
          color="secondary"
        >
          {this.props.avatar && (
            <Avatar src={this.props.avatar} alt={this.props.username || ''} />
          )}
          <span className="Menu-username"> {this.props.username} </span>
          <ArrowDropDown />
        </Button>
        <Menu
          id="fade-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem
            onClick={this.handleClose}
            component={({ innerRef, ...props }) => <Link to="/me" {...props} />}
          >
            PROFILE
          </MenuItem>
          <MenuItem onClick={this.props.logout}>LOG OUT</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default FadeMenu;
