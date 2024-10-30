
import React, { useState } from "react";
import "./CarbonCalculator.css";

const CarbonCalculator = () => {
  const [transport, setTransport] = useState(0);
  const [electricity, setElectricity] = useState(0);
  const [food, setFood] = useState(0);
  const [carbonFootprint, setCarbonFootprint] = useState(0);

  const calculateFootprint = () => {
    const totalFootprint = transport * 0.2 + electricity * 0.3 + food * 0.1;
    setCarbonFootprint(totalFootprint.toFixed(2));
  };

  return (
    <div className="calculator-container" id="calculator" data-aos="fade-up">
      <h2>Kalkulator Jejak Karbon</h2>
      <p>
        Hitung perkiraan jejak karbon Anda berdasarkan konsumsi transportasi,
        listrik, dan makanan.
      </p>

      <div className="input-horizontal">
        <div className="input-group">
          <label>Transportasi (km per minggu):</label>
          <input
            type="number"
            value={transport}
            onChange={(e) => setTransport(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Listrik (kWh per bulan):</label>
          <input
            type="number"
            value={electricity}
            onChange={(e) => setElectricity(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Makanan (porsi dengan daging per minggu):</label>
          <input
            type="number"
            value={food}
            onChange={(e) => setFood(e.target.value)}
          />
        </div>

        <button onClick={calculateFootprint} className="calculate-button">
          Hitung
        </button>
      </div>

      <h3>Perkiraan Jejak Karbon Anda: {carbonFootprint} kg CO₂ per minggu</h3>
    </div>
  );
};

export default CarbonCalculator;
