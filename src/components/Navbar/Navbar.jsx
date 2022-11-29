import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import './Navbar.css';
import SideBar from '../SideBar/SideBar';
import Modal from '../Modal/Modal';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
        <PermIdentityIcon />
        <button className="nav-btn" onClick={handleOpen}>
          Вход
        </button>
      </div>
      <Modal open={open} handleClose={handleClose} />
    </nav>
  );
};

export default Navbar;
