import React, { useState } from 'react';
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

const FadeMenu: React.FC<FadeMenuProps> = props => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-owns={anchorEl ? 'fade-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        color="secondary"
      >
        {props.avatar && (
          <Avatar src={props.avatar} alt={props.username || ''} />
        )}
        <span className="Menu-username"> {props.username} </span>
        <ArrowDropDown />
      </Button>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <Link to="/me">PROFILE</Link>
        </MenuItem>
        <MenuItem onClick={props.logout}>LOG OUT</MenuItem>
      </Menu>
    </div>
  );
};

export default FadeMenu;
