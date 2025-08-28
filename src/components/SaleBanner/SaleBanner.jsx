import React from "react";
import './SaleBanner.css'
import diamond from "../../assets/SalediamondImg1.png";
import badge from "../../assets/SaleBadgeImg2.png";

function SaleBanner() {
  const sales = [
    {
      image: diamond,
      discount: "85% OFF",
      bg: "#c9c9a5",
    },
    {
      image: badge,
      discount: "75% OFF",
      bg: "#d1baba",
    },
  ];

  return (
    <div className="container my-5 w-70">
      <div className="row">
        {sales.map((sale, index) => (
          <div className="col-md-6 mb-3" key={index}>
            <div
              className="text-center py-5"
              style={{ backgroundColor: sale.bg }}
            >
              <img
                src={sale.image}
                alt="sale icon"
                style={{ height: "150px", marginBottom: "20px" }}
              />
              <h5>Hurry Up!</h5>
              <h1>{sale.discount}</h1>
              <h5>Sale</h5>
              <button
                className="btn btn-outline-light mt-3 px-4"
                style={{ padding: "10px 30px" }}
              >
                SHOP NOW
              </button> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SaleBanner;
