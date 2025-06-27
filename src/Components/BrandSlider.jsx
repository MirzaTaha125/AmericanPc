import React from "react";
import logo1 from "../assets/logo1.png";
import logo2 from "../assets/logo2.png";
import logo3 from "../assets/logo3.png";
import logo4 from "../assets/logo4.png";
import logo5 from "../assets/logo5.png";
import logo6 from "../assets/logo6.png";
import logo7 from "../assets/logo7.png";

const BrandSlider = () => {
  // Sample brand logos - replace with your actual brand logos
  const brands = [
    { id: 1, logo: logo1 },
    { id: 2, logo: logo2 },
    { id: 3, logo: logo3 },
    { id: 4, logo: logo4 },
    { id: 5, logo: logo5 },
    { id: 6, logo: logo6 },
    { id: 7, logo: logo7 },
  ];

  return (
    <div className="brand-slider-container">
      <div className="brand-slider">
        <div className="brand-slider-track">
          {/* First set of brands */}
          {brands.map((brand) => (
            <div key={brand.id} className="brand-item">
              <div className="brand-logo">
                <img
                  src={brand.logo}
                  alt={`Brand ${brand.id}`}
                  style={{ maxHeight: 60, maxWidth: 120 }}
                />
              </div>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {brands.map((brand) => (
            <div key={`${brand.id}-duplicate`} className="brand-item">
              <div className="brand-logo">
                <img
                  src={brand.logo}
                  alt={`Brand ${brand.id}`}
                  style={{ maxHeight: 60, maxWidth: 120 }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandSlider;
