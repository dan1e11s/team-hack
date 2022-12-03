import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import './ProductCard.css';
import EastIcon from '@mui/icons-material/East';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ item }) {
  const navigate = useNavigate();

  return (
    <div
      className="shop-wrapper"
      onClick={() => navigate(`/products/${item.slug}`)}
    >
      <Card className="shop-card">
        <div className="shop-img-wrapper">
          <CardMedia
            className="shop-card-img"
            component="img"
            height="100%"
            image={item.image}
            alt="Paella dish"
          />
          <EastIcon className="shop-card-icon" />
        </div>
      </Card>
      <div className="shop-card-info">
        <h3 className="shop-card-title">{item.title}</h3>
        <p className="shop-card-price">${item.price}</p>
      </div>
    </div>
  );
}
