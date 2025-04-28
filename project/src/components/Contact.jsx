import React from 'react'
import './Contact.css'
import ContactSection from '../components/ContactSection';
import MapEmbed from '../components/MapEmbed';

export const Contact = () => {
  return (
    <div className='contact-container'>
        <div className='contact-content'>
            <div className='contact-card'>
                <img src="/src/assets/contact-1.jpeg" alt="contact" />
                <h2>Contact Us</h2>
                <nav className="breadcrumb">
                    <a href="/" className='home'>Home</a>
                    <span style={{color:"#c5c3c3"}}>&gt;</span>
                    <a href="/contact">Contact Us</a>
                 </nav>
            </div>
        </div>

        <ContactSection/>

        <MapEmbed/>
    </div>
  )
}

export default Contact;