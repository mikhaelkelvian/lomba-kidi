import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <section className="about-us" id="about" data-aos="fade-up">
      <h2 className="about-title">Tentang Kami</h2>
      <p className="about-description">
        ArtEco adalah platform yang menggabungkan seni dan inovasi untuk masa
        depan yang lebih hijau dan berkelanjutan. Misi kami adalah menginspirasi
        generasi muda untuk berpartisipasi dalam keberlanjutan melalui karya
        seni yang inovatif dan berwawasan lingkungan.
      </p>
      <p className="about-description">
        Kami percaya bahwa seni dan inovasi memiliki kekuatan untuk mengubah
        perspektif dan mendukung keberlanjutan. Melalui ArtEco, kami
        menghadirkan karya seni yang memperlihatkan bagaimana material daur
        ulang dan proses kreatif dapat menjadi bagian dari solusi lingkungan.
      </p>
      <img
        src="/assets/about-us-image.jpg"
        alt="Ilustrasi tentang kami"
        className="about-image"
      />
    </section>
  );
};

export default AboutUs;
