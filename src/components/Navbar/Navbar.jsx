import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import './Navbar.css';
import SideBar from '../SideBar/SideBar';
import Modal from '../Modal/Modal';
import { useAuth } from '../../contexts/AuthContextProvider';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import Badge from '@mui/material/Badge';
import { useCart } from '../../contexts/CardContextProvider';

const Navbar = () => {
  const { cartLength } = useCart();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [anchorEl, setAnchorEl] = useState(null);

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

  const username = localStorage.getItem('username');

  return (
    <div className="navbar">
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
        <div className="nav-logo" onClick={() => navigate('/')}>
          <BeachAccessIcon sx={{ cursor: 'pointer' }} />
          <h2 className="nav-title">Umbrella</h2>
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
                sx={{ listStyle: 'none' }}
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
                <li
                  style={{
                    fontSize: '16px',
                    fontWeight: 'bold',
                    marginLeft: '5px',
                    marginTop: '2px',
                  }}
                >
                  {username.toUpperCase()}
                </li>
              </IconButton>
              <Menu
                sx={{ zIndex: '100000000' }}
                id="menu-"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorEl)}
                onClose={handleCloseAva}
              >
                <MenuItem
                  onClick={() => {
                    handleClose();
                    handleCloseAva();
                    handleLogout();
                  }}
                >
                  Выйти
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    handleClose();
                    handleCloseAva();
                    deleteAccount();
                  }}
                >
                  Удалить аккаунт
                </MenuItem>
              </Menu>
            </div>
          ) : null}
          <button
            className="nav-btn"
            onClick={() => {
              if (!currentUser) {
                handleOpen();
                handleCloseAva();
              }
            }}
            style={{ display: currentUser ? 'none' : 'block' }}
          >
            <h3>Вход</h3>
          </button>
          {currentUser ? (
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => navigate('/cart')}
              color="inherit"
            >
              <Badge badgeContent={cartLength} color="error" size="large">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          ) : null}
        </div>
        <Modal open={open} handleClose={handleClose} />
      </nav>
    </div>
  );
};

export default Navbar;
