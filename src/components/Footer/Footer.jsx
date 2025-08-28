import React from "react";
import './Footer.css'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaPinterestP, FaPhone, FaEnvelope,FaMapMarkerAlt,} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer mt-5 border-top ">
      <div className="container ">
        <div className="row">

          <div className="col-md-4 mt-5">
            <p>
              Evara is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus mollitia rerum odit rem sapiente molestiae alias consectetur quaerat tempora assumenda, accusamus eum vel autem distinctio deleniti ducimus nesciunt iste explicabo...
            </p>
            <div className="d-flex gap-3 mt-4">
              <a href="#"><FaFacebookF className="social-icon icon-bg1" /></a>
              <a href="#"><FaTwitter className="social-icon icon-bg2" /></a>
              <a href="#"><FaInstagram className="social-icon icon-bg3" /></a>
              <a href="#"><FaLinkedinIn className="social-icon icon-bg4" /></a>
              <a href="#"><FaPinterestP className="social-icon icon-bg5" /></a>
            </div>
          </div>
          <div className="col-6 col-md-2">
            <h6 className="heading-col fw-bold text-uppercase mb-3 mt-5">Online Shopping</h6>
            <ul className="list-unstyled">
              <li>Men’s T-Shirts</li>
              <li>Women’s Wear</li>
              <li>Winter Collections</li>
              <li>Hooded T-Shirts</li>
              <li>Streetwear Collections</li>
            </ul>
          </div>
          <div className="col-6 col-md-2">
            <h6 className="heading-col fw-bold text-uppercase mb-3 mt-5">Customer Policies</h6>
            <ul className="list-unstyled">
              <li>About Us</li>
              <li>Terms & Conditions</li>
              <li>Shipping & Returns</li>
              <li>Refund Policy</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6 className="heading-col fw-bold text-uppercase mb-3 mt-5 ">Store Information</h6>
            <p><FaMapMarkerAlt className="me-2" />EVARA  is simply dummy text of the printing industry.</p>
            <p><FaPhone className="me-2" />Call Us: 1234567890</p>
            <p><FaEnvelope className="me-2 " />Email Us: evara@yourmail.com</p>
          </div>
        </div>
      </div>


      <div className="text-center py-3 text-white" style={{ backgroundColor: '#1A0C0C' }}>
        &copy; 2022-23 Powered By evara team
      </div>
    </footer>
  );
}

export default Footer;
