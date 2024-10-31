import React from "react";
import { FaSun, FaMoon, FaUser, FaGlobe } from "react-icons/fa";
import "./Navbar.css";
import logo from "../assets/ArtEco_logo.png";

const Navbar = ({ isDarkMode, toggleTheme }) => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar" id="/">
      <div className="navbar-logo">
        <a href="/">
          <img
            src={logo}
            alt="ArtEco Logo"
            style={{
              height: "91px",
              width: "110px",
              margin: "0px",
              padding: "1px",
            }}
          />
        </a>
      </div>
      <ul className="navbar-menu">
        <li>
          <a href="/">Beranda</a>
        </li>
        <li>
          <a
            href="#gallery"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("gallery");
            }}
          >
            Galeri
          </a>
        </li>
        <li>
          <a
            href="#calculator"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("calculator");
            }}
          >
            Kalkulator
          </a>
        </li>
        <li>
          <a
            href="#innovation"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("innovation");
            }}
          >
            Inovasi Hijau
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("about");
            }}
          >
            Tentang Kami
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact");
            }}
          >
            Kontak
          </a>
        </li>
      </ul>
      <div className="navbar-actions">
        <div className="translate-container">
          <span className="translate-option">ID</span>
          <FaGlobe />
          <span className="translate-option">EN</span>
        </div>
        <button className="toggle-button" onClick={toggleTheme}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button className="login-button">
          <FaUser /> Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
