import React from "react";
import { useEffect } from "react";
import { useProduct } from "../../contexts/ProductContextProvider";
import { useNavigate } from "react-router-dom";
import ProductCard from "../products/ProductCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "../TopTenProducts/TopTenProducts.css";
import {
  Navigation,
  Pagination,
  Keyboard,
  Autoplay,
  EffectCoverflow,
} from "swiper";

export default function TopTenProducts({ item }) {
  const { topTen, getTopTenProducts } = useProduct();
  const navigate = useNavigate();

  useEffect(() => {
    getTopTenProducts();
  }, []);
  console.log(topTen);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "4% 8%",
      }}>
      <h2 className="mainContentText" id="topTenH2">
        Новая коллекция
      </h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={true}
        navigation={true}
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard, Autoplay, EffectCoverflow]}
        className="mySwiper">
        {topTen ? (
          topTen.map(item => (
            <SwiperSlide>
              <ProductCard key={item.updated_at} item={item} />
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
