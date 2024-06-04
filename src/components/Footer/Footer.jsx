import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-column logo-column">
          <img src="./images/logo.png" alt="Uifry Logo" className="footer-logo" />
          <div className="contact-info">
            <div className="contact-item">
              <img src="./images/footer_msg.png" alt="Email Icon" />
              <span>Help@Frybix.Com</span>
            </div>
            <div className="contact-item">
              <img src="./images/footer_phone.png" alt="Phone Icon" />
              <span>+1234 456 678 89</span>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <h4>Links</h4>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Bookings</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Terms Of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookie Policy</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Product</h4>
          <ul>
            <li><a href="#">Take Tour</a></li>
            <li><a href="#">Live Chat</a></li>
            <li><a href="#">Reviews</a></li>
          </ul>
        </div>
        <div className="footer-column newsletter-column">
          <h4>Newsletter</h4>
          <p>Stay Up To Date</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Your email" />
            <button type="submit">Subscribe</button>
          </div>
        </div>
      </div>
      <img className="footer-img" src="./images/footer_img_2.png" alt="" />
    </footer>
  );
};

export default Footer;
