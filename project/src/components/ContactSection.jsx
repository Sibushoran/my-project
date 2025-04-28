import React, { useState } from "react";
import "./ContactSection.css";

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-section">
      <div className="contact-info">
        <h2>Contact info</h2>
        <p>
        Ac tincidunt vitae semper quis lectus. Etiam non quam lacus suspendisse fau us inter um<br/> posuere orem ipsum. Sed velit dignissim sodales veu sem intelvin elementum intger enim<br/> neque id cursus metus quam lacus suspendisse.
        </p>
        
        <div className="info-box">
          <div className="icon"><i class="fa-solid fa-location-dot"></i></div>
          <div className="info-text">
            <h4>UDesign Address</h4>
            <p>123 Street name City England</p>
          </div>
        </div>
        <div className="info-box">
          <div className="icon"><i class="fa-solid fa-phone-volume"></i></div>
          <div className="info-text">
            <h4>Phone Number</h4>
            <p>(800)123-4567, (800)321-7654</p>
          </div>
        </div>
        <div className="info-box">
          <div className="icon"><i class="fa-regular fa-clock"></i></div>
          <div className="info-text">
            <h4>Opening Hours</h4>
            <p>Mon - Sat / 8:00 - 18:00</p>
          </div>
        </div>
      </div>

        <div className="contact-form">
            <h2>Send us a message</h2>
            <p>Your email address will not be published. Required fields are marked.</p>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Your name"
                value={form.name}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Your email address"
                value={form.email}
                onChange={handleChange}
                required
            />
            <textarea
                name="message"
                placeholder="Your message"
                value={form.message}
                onChange={handleChange}
                required
            ></textarea>
            <button type="submit">SEND MESSAGE</button>
            </form>
        </div>
    </div>
  );
};

export default ContactSection;