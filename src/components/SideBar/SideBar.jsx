import React from 'react';
import { Collapse } from '@mui/material';
import './SideBar.css';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import { useLocation, useNavigate } from 'react-router-dom';

const SideBar = ({ collapseOpen, setCollapseOpen, handleOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Collapse className="collapse-box" in={collapseOpen}>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
        <PermIdentityIcon />
        <button className="nav-btn" onClick={handleOpen}>
          Вход
        </button>
      </div>
      <ul className="collapse-list">
        <li
          className={`collapse-list-item ${
            location.pathname === '/' ? 'active' : ''
          }`}
          onClick={() => navigate('/')}
        >
          Главная
        </li>
        <li
          className={`collapse-list-item ${
            location.pathname === '/shop' ? 'active' : ''
          }`}
          onClick={() => navigate('/shop')}
        >
          Магазин
        </li>
        <li
          className={`collapse-list-item ${
            location.pathname === '/about' ? 'active' : ''
          }`}
          onClick={() => navigate('/about')}
        >
          О бренде
        </li>
        <li
          className={`collapse-list-item ${
            location.pathname === '/contacts' ? 'active' : ''
          }`}
          onClick={() => navigate('/contacts')}
        >
          Контакты
        </li>
      </ul>
    </Collapse>
  );
};

export default SideBar;
