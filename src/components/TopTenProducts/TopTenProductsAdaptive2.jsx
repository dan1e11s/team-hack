import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProduct } from '../../contexts/ProductContextProvider';
import { Card, CardMedia } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import '../TopTenProducts/TopTenProducts.css';
import {
  Navigation,
  Pagination,
  Keyboard,
  Autoplay,
  EffectCoverflow,
} from 'swiper';
import EastIcon from '@mui/icons-material/East';

export default function TopTenProductsAdpative2() {
  const { topTen, getTopTenProducts } = useProduct();

  const navigate = useNavigate();

  useEffect(() => {
    getTopTenProducts();
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '4% 0%',
      }}
    >
      <h2
        className="mainContentText"
        id="topTenH2"
        style={{ marginLeft: '8%' }}
      >
        Популярные товары
      </h2>
      <Swiper
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={true}
        navigation={true}
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard, Autoplay, EffectCoverflow]}
        className="mySwiper"
      >
        {topTen ? (
          topTen.map((item) => (
            <SwiperSlide key={item.title}>
              <div
                className="shop-wrapper"
                onClick={() => navigate(`/products/${item.slug}`)}
              >
                <Card className="shop-card">
                  <div className="shop-img-wrapper">
                    <CardMedia
                      className="shop-card-img"
                      component="img"
                      image={`http://34.89.197.142${item.image}`}
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
            </SwiperSlide>
          ))
        ) : (
          <SwiperSlide>
            <h3>Loading</h3>
          </SwiperSlide>
        )}
      </Swiper>
    </div>
  );
}
