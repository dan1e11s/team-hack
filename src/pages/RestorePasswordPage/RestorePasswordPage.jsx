import React, { useState } from 'react';
import './RestorePasswordPage.css';
import { TextField } from '@mui/material';
import { useAuth } from '../../contexts/AuthContextProvider';
import { useNavigate } from 'react-router-dom';

const RestorePasswordPage = () => {
  const { restorePassword } = useAuth();

  const [email, setEmail] = useState('');

  const navigate = useNavigate();

  function passwordRes() {
    let formData = new FormData();
    formData.append('email', email);
    restorePassword(formData, navigate);
  }

  return (
    <>
      <div className="restore-box">
        <div>
          <div className="restore-title">
            <p>Помощь со входом</p>
            <div>
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ width: '300px', marginBottom: '20px' }}
                type="email"
                placeholder="Введите вашу почту"
              />
              <div className="restore-btns">
                <button variant="contained" onClick={passwordRes}>
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
    </>
  );
};

export default RestorePasswordPage;
