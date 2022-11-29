import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import './Navbar.css';
import { Box, Button, TextField } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import SideBar from '../SideBar/SideBar';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText('#6e9c9f'),
  backgroundColor: '#6e9c9f',
  '&:hover': {
    backgroundColor: '#5d8d90',
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [collapseOpen, setCollapseOpen] = useState(false);

  const [activeLog, setActiveLog] = useState(true);
  const [activeReg, setActiveReg] = useState(false);

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
        <PermIdentityIcon />
        <button className="nav-btn" onClick={handleOpen}>
          Вход
        </button>
      </div>
      <Modal
        sx={{ textAlign: 'center' }}
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <span
            className="log-title auth-btn"
            style={{
              borderBottom: activeLog ? '2px solid #6e9c9f' : '',
              color: activeLog ? '#6e9c9f' : '',
            }}
            onClick={() => {
              setActiveLog(true);
              setActiveReg(false);
            }}
          >
            Вход
          </span>
          <span
            style={{
              borderBottom: activeReg ? '2px solid #6e9c9f' : '',
              color: activeReg ? '#6e9c9f' : '',
            }}
            onClick={() => {
              setActiveReg(true);
              setActiveLog(false);
            }}
            className="reg-title auth-btn"
          >
            Регистрация
          </span>
          <Box
            className="box-1 "
            style={{
              marginTop: '20px',
              display: activeLog ? 'block' : 'none',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="Enter username"
                variant="standard"
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <VpnKeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                type="password"
                label="Enter your password"
                variant="standard"
              />
            </Box>
            <ColorButton variant="contained">Вход</ColorButton>
          </Box>

          <Box
            className="box-2"
            style={{
              marginTop: '20px',
              display: activeReg ? 'block' : 'none',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="Enter username"
                variant="standard"
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <EmailIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                id="input-with-sx"
                label="Enter your email"
                variant="standard"
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <VpnKeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                type="password"
                label="Enter password"
                variant="standard"
              />
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
                marginBottom: '20px',
              }}
            >
              <VpnKeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
              <TextField
                type="password"
                label="Confirm password"
                variant="standard"
              />
            </Box>
            <ColorButton variant="contained">Регистрация</ColorButton>
          </Box>
        </Box>
      </Modal>
    </nav>
  );
};

export default Navbar;
