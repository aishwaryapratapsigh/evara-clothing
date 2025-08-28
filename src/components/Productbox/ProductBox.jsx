import React from 'react'
import './ProductBox.css'
import boxImg1 from '../../assets/boxImg1.png'
import boxImg2 from '../../assets/boxImg2.png'
import boxImg3 from '../../assets/boxImg3.png'
import boxImg4 from '../../assets/boxImg4.png'
import boxImg5 from '../../assets/boxImg5.png'

function ProductBox() {
  return (
    <div className="container my-3">
      <div className="row">
        <div className="col-12 col-md-6 box">
          <img src={boxImg1} className="img-fluid w-100" alt="Baggy Offer" />
        </div>
        <div className="col-12 col-md-6 box">
          <img src={boxImg2} className="img-fluid w-100" alt="Winter Collection" />
        </div>
      </div>
      <div className="row my-3">
        <div className="col-12 col-md-4 box">
          <img src={boxImg3} className="img-fluid w-100" alt="Women's Wear" />
        </div>
        <div className="col-12 col-md-4 box">
          <img src={boxImg4} className="img-fluid w-100" alt="Best Deal" />
        </div>
        <div className="col-12 col-md-4 box">
          <img src={boxImg5} className="img-fluid w-100" alt="Trendy T-Shirts" />
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
