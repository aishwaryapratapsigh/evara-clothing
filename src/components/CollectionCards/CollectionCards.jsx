import React from "react";
import Coll_Img1 from "../../assets/Coll_Img1.png";
import Coll_Img2 from "../../assets/Coll_Img2.png";
import Coll_Img3 from "../../assets/Coll_Img3.png";
import { Link } from "react-router-dom";


function CollectionCards() {
  const categories = [
    { image: Coll_Img1, title: "Streetwear Collections" },
    { image: Coll_Img2, title: "Striped T-Shirts" },
    { image: Coll_Img3, title: "Round Neck T-Shirts" },
  ];

  return (
    <div className="container my-5">
      <div className="row">
        {categories.map((cat, index) => (
          <div className="col-md-4 mb-3" key={index}>
            <div className="position-relative text-center">
              <img
                src={cat.image}
                alt={cat.title}
                className="img-fluid"
                style={{ height: "432px", objectFit: "cover", width: "100%" }}
              />

              <div className="position-absolute bottom-0 w-100 overlay-blur">
                <h5 className="mb-3"><Link to="/" style={{ textDecoration: "none", color:"white"}}>{cat.title}</Link></h5>
              </div>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default CollectionCards;
