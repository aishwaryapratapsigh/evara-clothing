import React from "react";
import TrendCard from "./TrendHoverCard";
import TrendImg1 from "../../assets/TrendImg1.png";
import TrendImg2 from "../../assets/TrendImg2.png";
import TrendImg3 from "../../assets/TrendImg3.png";
import TrendImg4 from "../../assets/TrendImg4.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function TrendingSection({ TitleHeading }) {
  const products = [
    {
      image: TrendImg1,
      title: "Men Henley Neck",
      subtitle: "Full Sleeve Red Wine",
      price: 399,
      originalPrice: 1299,
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      image: TrendImg2,
      title: "Men Henley Neck",
      subtitle: "Full Sleeve Red Wine",
      price: 399,
      originalPrice: 1299,
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      image: TrendImg3,
      title: "Men Henley Neck",
      subtitle: "Full Sleeve Red Wine",
      price: 399,
      originalPrice: 1299,
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
    {
      image: TrendImg4,
      title: "Men Henley Neck",
      subtitle: "Full Sleeve Red Wine",
      price: 399,
      originalPrice: 1299,
      sizes: ["S", "M", "L", "XL", "XXL"],
    },
  ];

  return (
    <>
     
      <div className="container my-5 d-none d-md-block">
        <h3 className="text-center mb-4">{TitleHeading}</h3>

        <div className="row">
          {products.map((product, index) => (
            <div className="col-md-6 col-lg-3 mb-4" key={index}>
              <TrendCard {...product} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="btn text-white mt-3 px-5 py-2" style={{ backgroundColor: "#770015" }}>
            VIEW ALL
          </button>
        </div>
      </div>

      <div className="d-block d-md-none ms-2">
        <h3 className="text-center mb-4">{TitleHeading}</h3>

        <Swiper spaceBetween={15} slidesPerView={1.5}>
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <TrendCard {...product} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-3">
          <button className="btn text-white px-5 py-2 my-4" style={{ backgroundColor: "#770015" }}>
            VIEW ALL
          </button>
        </div>
      </div>
    </>
  );
}

export default TrendingSection;
