import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

type BasicMenuProps = {
  label: string;
};

export default function BasicMenu(props: BasicMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="outlined" 
      >
        {props.label}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Link to={'/'}>
        <MenuItem onClick={handleClose}>一覧ページ</MenuItem>
        </Link>
        <Link to={'/DetailPage'}>
        <MenuItem onClick={handleClose}>詳細ページ</MenuItem>
        </Link>
        <Link to={'/EditingPage'}>
        <MenuItem onClick={handleClose}>編集ページ</MenuItem>
        </Link>
        <Link to={'/Signup'}>
        <MenuItem onClick={handleClose}>登録ページ</MenuItem>
        </Link>
      </Menu>
    </div>
  );
}
