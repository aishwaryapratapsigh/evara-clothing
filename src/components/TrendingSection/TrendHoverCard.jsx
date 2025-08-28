import React from "react";
import './TrendCard.css'
import { FaShoppingCart, FaHeart, FaShareAlt } from "react-icons/fa";


function TrendHoverCard({ image, title, subtitle, price, originalPrice, sizes }) {
    return (
        <div className="product-card text-center mb-3 position-relative">
            <div className="image-container position-relative">
                <img
                    src={image}
                    alt={title}
                    className="product-image mx-auto d-block"
                    style={{ width: "264px", height: "412px", objectFit: "cover" }}
                />

                <div className="hover-icons position-absolute top-50 start-50 translate-middle gap-3">

                    <div className="icon-circle">
                        <FaShoppingCart />
                    </div>
                    <div className="icon-circle">
                        <FaHeart />
                    </div>
                    <div className="icon-circle">
                        <FaShareAlt />
                    </div>
                </div>
            </div>

            <p className="mt-2 mb-0 small">{title}<br />{subtitle}</p>

            <p className="mb-1">
                <span className="fw-bolder fs-5 ">₹{price}</span>{" "}
                <del className=" small text-danger ">₹{originalPrice}</del>
            </p>

            <div className="d-flex justify-content-center gap-2">
                {sizes.map((size, index) => (
                    <span
                        key={index}
                        className="border px-2 "
                        style={{ cursor: "pointer" }}
                    >
                        {size}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default TrendHoverCard;
