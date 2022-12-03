import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import './Navbar.css';
import SideBar from '../SideBar/SideBar';
import Modal from '../Modal/Modal';
import { useAuth } from '../../contexts/AuthContextProvider';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseAva = () => {
    setAnchorEl(null);
  };

  const { currentUser, checkAuth, handleLogout, deleteAccount } = useAuth();

  useEffect(() => {
    if (localStorage.getItem('tokens')) {
      checkAuth();
    }
  }, []);

  const [collapseOpen, setCollapseOpen] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();

  return (
    <nav className="nav">
      <button
        onClick={() => setCollapseOpen(!collapseOpen)}
        className="menu-btn"
        variant="contained"
      >
        Меню
      </button>
      <SideBar
        collapseOpen={collapseOpen}
        setCollapseOpen={setCollapseOpen}
        handleOpen={handleOpen}
      />
      <div className="nav-logo">
        <BeachAccessIcon />
        <h2 className="nav-title" onClick={() => navigate('/')}>
          Umbrella
        </h2>
      </div>
      <ul className="nav-list">
        <li
          className={`nav-list-item ${
            location.pathname === '/' ? 'active' : ''
          }`}
          onClick={() => navigate('/')}
        >
          Главная
        </li>
        <li
          className={`nav-list-item ${
            location.pathname === '/shop' ? 'active' : ''
          }`}
          onClick={() => navigate('/shop')}
        >
          Магазин
        </li>
        <li
          className={`nav-list-item ${
            location.pathname === '/about' ? 'active' : ''
          }`}
          onClick={() => navigate('/about')}
        >
          О бренде
        </li>
        <li
          className={`nav-list-item ${
            location.pathname === '/contacts' ? 'active' : ''
          }`}
          onClick={() => navigate('/contacts')}
        >
          Контакты
        </li>
      </ul>
      <div className="nav-acc">
        {currentUser ? (
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              open={Boolean(anchorEl)}
              onClose={handleCloseAva}
            >
              <MenuItem
                onClick={() => {
                  handleClose();
                  handleLogout();
                }}
              >
                Logout
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleClose();
                  deleteAccount();
                }}
              >
                Delete Account
              </MenuItem>
            </Menu>
          </div>
        ) : null}
        <button
          className="nav-btn"
          onClick={() => {
            if (!currentUser) {
              handleOpen();
            }
          }}
          style={{ display: currentUser ? 'none' : 'block' }}
        >
          <h3>Вход</h3>
        </button>
        {currentUser ? <ShoppingBagIcon /> : null}
      </div>
      <Modal open={open} handleClose={handleClose} />
    </nav>
  );
};

export default Navbar;
