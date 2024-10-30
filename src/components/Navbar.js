import React from "react";
import { FaSun, FaMoon, FaUser } from "react-icons/fa"; 
import "./Navbar.css";
import logo from '../assets/ArtEco_logo.png'

const Navbar = ({ isDarkMode, toggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">
          <img
            src={logo}
            alt="ArtEco Logo"
            style={{ height: "150px", width: "auto" }}
          />
        </a>
      </div>
      <ul className="navbar-menu">
        <li>
          <a href="/">Beranda</a>
        </li>
        <li>
          <a href="#gallery">Galeri</a>
        </li>
        <li>
          <a href="#calculator">Kalkulator</a>
        </li>
        <li>
          <a href="#innovation">Inovasi Hijau</a>
        </li>
        <li>
          <a href="#about">Tentang Kami</a>
        </li>
        <li>
          <a href="#contact">Kontak</a>
        </li>
      </ul>
      <div className="navbar-actions">
        <button className="toggle-button" onClick={toggleTheme}>
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </button>
        <button className="login-button">
          <i className="fa fa-user" aria-hidden="true"></i> Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
