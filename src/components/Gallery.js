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
    { src: HutanTropis, description: "Hutan tropis yang lestari" },
    {
      src: LukisanGunung,
      description: "Lukisan Perkampung di Garut Jawa-Barat-1905 ",
    },
    {
      src: DaurUlang,
      description: "Seni daur ulang dari plastik bekas",
    },
    {
      src: DaurUlang2,
      description: "Seni daur ulang dari sampah bekas",
    },
    { src: TamanNasional, description: "Taman Nasional Komodo di Labuan Bajo" },
    { src: CagarAlam, description: "Cagar Alam" },
    { src: PanelSurya, description: "Karya seni panel surya" },
    { src: TurbinAngin, description: "Seni turbin angin bunga tulip" },
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
