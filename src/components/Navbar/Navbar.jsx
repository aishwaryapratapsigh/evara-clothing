import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

import searchIcon from '../../assets/searchIcon.png';
import heartIcon from '../../assets/heartIcon.png';
import cartIcon from '../../assets/cartIcon.png';
import userIcon from '../../assets/userIcon.png';
import hamburgeIcon from '../../assets/hamburgeImg.png';

function Navbar() {
  return (
    <>
      <div className="top-bar text-white d-flex align-items-center w-100" style={{ backgroundColor: '#1F1F1F', height: '48px' }}>
        <marquee behavior="scroll" direction="left">
          <span>Welcome to Our Store Evara</span>
          <span style={{ marginLeft: "200px" }}>📞 Call Us: 1234567890</span>
        </marquee>
      </div>

      <nav className="navbar text-dark d-flex align-items-center justify-content-between">

        <div className="d-md-none">
          <img src={hamburgeIcon} alt="Menu" className="nav-icon" />
        </div>

        <div className="navbar-logo d-md-block text-center">
          <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}><h4 className="ms-3">EVARA</h4></Link>
        </div>

        <ul className="navbar-icons d-flex list-unstyled mb-0 align-items-center">
          <li className="mx-2">
            <Link to="/search">
              <img src={searchIcon} alt="Search" />
            </Link>
          </li>
          <li className="mx-2">
            <Link to="/wishlist">
              <img src={heartIcon} alt="Wishlist" />
            </Link>
          </li>
          <li className="mx-2">
            <Link to="/cart">
              <img src={cartIcon} alt="Cart" />
            </Link>
          </li>
          <li className="mx-2">
            <Link to="/profile">
              <img src={userIcon} alt="User" />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
