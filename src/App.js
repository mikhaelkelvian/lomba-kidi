import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import CarbonCalculator from "./components/CarbonCalculator";
import AOS from "aos"; 
import "aos/dist/aos.css"; 
import "./App.css";
import InovasiHijau from "./components/InovasiHIjau";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({
      duration:1000, 
      once: true, 
    });
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`App ${isDarkMode ? "dark" : "light"}`}>
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className="main">
        <h1 data-aos="fade-up">Selamat datang di website ArtEco</h1>
        <p data-aos="fade-up" data-aos-delay="200">
          Menggabungkan seni dan inovasi demi masa depan yang lebih hijau dan
          berkelanjutan.
        </p>
      </main>
      <section data-aos="fade-up">
        <Gallery />
      </section>
      <section data-aos="fade-up" data-aos-delay="300">
        <CarbonCalculator />
      </section>
      <section data-aos="fade-up" data-aos-delay="400">
        <InovasiHijau/>
      </section>
      <section data-aos="fade-up" data-aos-delay="400">
        <AboutUs />
      </section>
      <Footer />
    </div>
  );
}

export default App;
