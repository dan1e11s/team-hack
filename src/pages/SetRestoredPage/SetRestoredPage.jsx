import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContextProvider';

const SetRestoredPage = () => {
  const { setRestorePassword } = useAuth();

  const [email, setEmail] = useState('');
  const [code, setCode] = useState('');
  const [new_password, setPassword] = useState('');
  const [new_pass_confirm, setPasswordConfirm] = useState('');

  const navigate = useNavigate();

  function setPasswordRes() {
    let formData = new FormData();
    formData.append('email', email);
    formData.append('code', code);
    formData.append('new_password', new_password);
    formData.append('new_pass_confirm', new_pass_confirm);
    setRestorePassword(formData, navigate);
  }

  return (
    <div className="restore-box">
      <div>
        <div className="restore-title">
          <p>Восстановление пароля</p>
          <div>
            <TextField
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ width: '300px', marginBottom: '20px' }}
              type="email"
              placeholder="Введите вашу почту"
            />
            <br />
            <br />
            <TextField
              value={code}
              onChange={(e) => setCode(e.target.value)}
              sx={{ width: '300px', marginBottom: '20px' }}
              type="text"
              placeholder="Введите код"
            />
            <br />
            <br />
            <TextField
              value={new_password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ width: '300px', marginBottom: '20px' }}
              type="text"
              placeholder="Введите новый пароль"
            />
            <br />
            <br />
            <TextField
              value={new_pass_confirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              sx={{ width: '300px', marginBottom: '20px' }}
              type="text"
              placeholder="Повторите пароль"
            />
            <br />
            <br />
            <div className="restore-btns">
              <button variant="contained" onClick={setPasswordRes}>
                Отправить
              </button>
              <button variant="contained" onClick={() => navigate('/')}>
                Отмена
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetRestoredPage;
