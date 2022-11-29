import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';

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

const ModalBox = ({ open, handleClose }) => {
  const [activeLog, setActiveLog] = useState(true);
  const [activeReg, setActiveReg] = useState(false);

  return (
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
          <div style={{ marginTop: '20px' }}>
            <p className="forgot-text">Забыли пароль?</p>
          </div>
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
  );
};

export default ModalBox;
