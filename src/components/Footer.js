import React from "react";
import { FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contact" data-aos="fade-up">
      <div className="footer-content">
        <p>Hubungi kami:</p>
        <p>Email: info@arteco.com</p>
        <div className="social-icons">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
      <p className="footer-copyright">© 2024 ArtEco. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
