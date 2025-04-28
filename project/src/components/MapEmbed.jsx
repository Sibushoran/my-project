import React from "react";

const MapEmbed = () => {
  return (
    <div className="map-container" style={{ width: "100%", height: "450px", marginTop: "20px" }}>
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19893.476342969243!2d-0.1357326!3d51.509865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b321df391cd%3A0x4ec0fdd9c4c645b3!2sLondon!5e0!3m2!1sen!2sin!4v1643443364455!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0}}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;