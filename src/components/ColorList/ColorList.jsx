import * as React from 'react';
import LensIcon from '@mui/icons-material/Lens';
import Checkbox from '@mui/material/Checkbox';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './ColorList.css';

export default function ColorList({ oneProduct }) {
  return (
    <div className="color-list">
      <p>Выберите цвета</p>
      {oneProduct.color?.map((item) => (
        <Checkbox
          key={item}
          icon={
            <LensIcon sx={{ width: '50px', height: '50px', color: item }} />
          }
          checkedIcon={
            <CheckCircleIcon
              sx={{ width: '50px', height: '50px', color: item }}
            />
          }
        />
      ))}
    </div>
  );
}
