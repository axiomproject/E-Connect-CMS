import React from 'react';
import Layout from './components/Layout';
import './App.css';

const Contact: React.FC = () => (
  <Layout>
    <section className="contact-section">
      <div className="contact-hero">
        <span className="material-symbols-outlined contact-icon" aria-label="contact">mail</span>
        <h2>Contact Us</h2>
        <p className="contact-lead">
          Have questions, feedback, or want to connect? Reach out to the E-Connect team!
        </p>
      </div>
      <div className="contact-card">
        <div className="contact-info">
          <p><strong>Name:</strong> E-Connect QCU</p>
          <p><strong>Email:</strong> <a href="mailto:econnectqcu@gmail.com">econnectqcu@gmail.com</a></p>
          <p><strong>Phone:</strong> <a href="tel:+639123456789">+63 993 483 5984</a></p>
          <p><strong>Adress:</strong> G3H9+HQ Taguig, Metro Manila near Taguig City Hall</p>
        </div>
        <a
          href="mailto:econnectqcu@gmail.com"
          className="cta-button contact-btn"
        >
          Email Us Now
        </a>
      </div>
    </section>
  </Layout>
);

export default Contact;
