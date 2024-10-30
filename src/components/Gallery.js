import React from "react";
import "./Gallery.css";
import HutanTropis from '../assets/hutan_tropis.jpg'
import DaurUlang from '../assets/lukisan_plasttik.jpg'
import DaurUlang2 from '../assets/Seni_Sampah_Plastik.jpg'
import LukisanGunung from '../assets/Lukisan_Gunung.jpg'
import TamanNasional from '../assets/Taman_Nasional.jpg'
import CagarAlam from '../assets/Cagar_Alam.jpg'
import TurbinAngin from '../assets/Turbin_angin.png'
import PanelSurya from '../assets/Panel_Surya.jpg'

const Gallery = () => {
  const artworks = [
    { src: HutanTropis, description: "Hutan Tropis yang Lestari" },
    {
      src: LukisanGunung,
      description: "Lukisan Perkampung di Garut Jawa-Barat-1905 ",
    },
    {
      src: DaurUlang,
      description: "Seni Daur Dlang dari Plastik Bekas",
    },
    {
      src: DaurUlang2,
      description: "Seni Daur Ulang dari Sampah Bekas",
    },
    { src: TamanNasional, description: "Taman Nasional Komodo di Labuan Bajo" },
    { src: CagarAlam, description: "Cagar Alam" },
    { src: PanelSurya, description: "Karya Seni Panel Surya" },
    { src: TurbinAngin, description: "Seni Turbin Angin Bunga Tulip" },
  ];

  return (
    <section className="gallery-section" id="galerry" data-aos="fade-left">
      <h2 className="gallery-title">Galeri Seni</h2>
      <div className="gallery">
        {artworks.map((art, index) => (
          <div className="gallery-item" key={index}>
            <img
              src={art.src}
              alt={`Artwork ${index}`}
              className="gallery-image"
            />
            <div className="overlay">
              <p>{art.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
