import React from "react";
import { useEffect } from "react";
import { useProduct } from "../../contexts/ProductContextProvider";
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

export default function TopTenProductsAdpative2({ item }) {
  const { topTen, getTopTenProducts } = useProduct();

  useEffect(() => {
    getTopTenProducts();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "4% 0%",
      }}>
      <h2
        className="mainContentText"
        id="topTenH2"
        style={{ marginLeft: "8%" }}>
        Популярные товары
      </h2>
      <Swiper
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
            <SwiperSlide key={item.title}>
              <ProductCard item={item} />
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
