import React from 'react';
import cateImg1 from '../../assets/cateImg1.png';
import cateImg2 from '../../assets/cateImg2.png';
import cateImg3 from '../../assets/cateImg3.png';
import cateImg4 from '../../assets/cateImg4.png';
import cateImg5 from '../../assets/cateImg5.png';
import cateImg6 from '../../assets/cateImg6.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import './CategorySlider.css';

function CategoryList() {
  const categories = [
    { img: cateImg1, title: "Men's T-Shirts" },
    { img: cateImg2, title: "Women's Wear" },
    { img: cateImg3, title: "Winter Collections" },
    { img: cateImg4, title: "Hooded T-Shirts" },
    { img: cateImg5, title: "Polo Neck T-Shirts" },
    { img: cateImg6, title: "Full Sleeves T-Shirts" },
  ];

  return (
    <>
      
      <div className="d-none d-md-flex justify-content-around flex-wrap my-4 mx-5">
        {categories.map((props, index) => (
          <div key={index} className="categoriesImg text-center mx-2">
            <img src={props.img} style={{ width: '170px', height: '170px', objectFit: 'cover', borderRadius: '50%' }}/>
            <p className="mt-2">{props.title}</p>
          </div>
        ))}
      </div>

      
      <div className="d-block d-md-none px-3">
        <Swiper spaceBetween={10} slidesPerView={2.4}>
          {categories.map((cat, index) => (
            <SwiperSlide key={index}>
              <div className="text-center">
                <div className="circle-img">
                  <img src={cat.img} alt={cat.title} />
                </div>
                <p className="mt-2">{cat.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default CategoryList;
