import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import SharedLayout from './SharedLayout';
import './Contact.css';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <SharedLayout>
      <motion.div
        className="contact-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="contact-heading">Get In Touch</h2>

        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" required placeholder="Your Name" />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" required placeholder="your@email.com" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="4" required placeholder="How can we help?" />
          </div>
          <button type="submit">
            Send Message <FaPaperPlane style={{ marginLeft: '10px' }} />
          </button>
          {submitted && <p className="text-green-400 mt-2">Message sent successfully!</p>}
        </form>

        <section className="contact-info-grid">
          <div className="contact-card">
            <FaEnvelope size={28} style={{ marginBottom: '8px', color: '#60a5fa' }} />
            <h4>Email</h4>
            <p>support@meetpro.com</p>
          </div>
          <div className="contact-card">
            <FaPhoneAlt size={28} style={{ marginBottom: '8px', color: '#60a5fa' }} />
            <h4>Phone</h4>
            <p>+91-9325884072</p>
          </div>
          <div className="contact-card">
            <FaMapMarkerAlt size={28} style={{ marginBottom: '8px', color: '#60a5fa' }} />
            <h4>Office</h4>
            <p>Pune, Maharashtra, India</p>
          </div>
        </section>

       <div className="map-placeholder">
  <iframe
    title="Pune Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.6681096708993!2d73.85674317512591!3d18.52043007575459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c06c14b1d4ef%3A0x295d02bcebe1eeb9!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1719990660014!5m2!1sen!2sin"
    width="100%"
    height="280"
    style={{ border: 0, borderRadius: '1rem' }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>

      </motion.div>
    </SharedLayout>
  );
};

export default Contact;
