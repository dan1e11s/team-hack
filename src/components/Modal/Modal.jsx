import React, { useEffect, useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import Modal from '@mui/material/Modal';
import { styled } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import { useAuth } from '../../contexts/AuthContextProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 400,
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

  const { register, login, success } = useAuth();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  const navigate = useNavigate();

  async function createUser() {
    if (
      !username.trim() ||
      !email.trim() ||
      !password.trim() ||
      !passwordConfirm.trim()
    ) {
      alert('Some inputs are empty!');
      return;
    }
    let formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('password_confirm', passwordConfirm);

    await register(formData);

    setUsername('');
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
    handleClose();
  }

  useEffect(() => {
    if (
      success === 'Спасибо за регистрацию Активируйте свой аккаунт через почту'
    ) {
      Swal.fire({
        icon: 'success',
        title: 'Successfully!',
        text: `${success}`,
      });
    } else if (success) {
      Swal.fire({
        icon: 'error',
        title: 'OOOPS...',
        text: `${success}`,
      });
    }
  }, [success]);

  function loginUser() {
    if (!username.trim() || !password.trim()) {
      alert('Some inputs are empty!');
      return;
    }

    let formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    login(formData, username);
    navigate('/');
    handleClose();

    setUsername('');
    setPassword('');
  }

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
              value={username}
              label="Enter username"
              variant="standard"
              onChange={(e) => setUsername(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              label="Enter your password"
              variant="standard"
            />
          </Box>
          <ColorButton variant="contained" onClick={loginUser}>
            Вход
          </ColorButton>
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
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              type="password"
              label="Confirm password"
              variant="standard"
            />
          </Box>
          <ColorButton variant="contained" onClick={createUser}>
            Регистрация
          </ColorButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalBox;
