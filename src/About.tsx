import React, { useState } from 'react';
import Layout from './components/Layout';
import './App.css';

// Add this to your index.html <head> if not already present:
// <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />

const aboutItems = [
  {
    icon: '🌱',
    title: 'Our Vision',
    content:
      'We dream of a world where sustainable living is second nature. Econnect inspires and enables people everywhere to make eco-friendly choices every day.',
  },
  {
    icon: '🤝',
    title: 'Our Community',
    content:
      'Change is easier together! Our platform connects like-minded individuals to share, motivate, and celebrate progress as a team.',
  },
  {
    icon: '💡',
    title: 'Why Econnect?',
    content:
      'We blend technology, gamification, and community to help you build habits that matter—for you and for the planet.',
  },
];

const About: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Layout>
      <section className="about-hero">
        <h2>
          <span role="img" aria-label="leaf">🌿</span> About <span className="brand">Econnect</span>
        </h2>
        <p className="about-hero-lead">
          Empowering everyone to make a real difference—one small, sustainable step at a time.
        </p>
      </section>
      <section className="about-section">
        <div className="about-accordion">
          {aboutItems.map((item, idx) => (
            <div
              className={`about-accordion-item${openIndex === idx ? ' open' : ''}`}
              key={item.title}
            >
              <button
                className="about-accordion-title"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                aria-expanded={openIndex === idx}
              >
                <span className="about-accordion-icon">{item.icon}</span>
                {item.title}
                <span className="about-accordion-arrow material-symbols-outlined">
                  {openIndex === idx ? 'expand_less' : 'expand_more'}
                </span>
              </button>
              <div
                className="about-accordion-content"
                style={{ display: openIndex === idx ? 'block' : 'none' }}
              >
                <p>{item.content}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="about-cta">
          <p>
            <strong>Get the Econnect App Instantly!</strong>
          </p>
          <p style={{marginBottom: "1.5rem"}}>
            Be among the first to experience Econnect—download our APK and start making a positive impact right from your Android device. No waiting, no barriers—just tap and join the movement!
          </p>
          <a
            href="https://drive.google.com/file/d/1yNtv6CexVAvZhnoJXST134T3RIG9Luvz/view?usp=sharing"
            className="cta-button"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            Download APK
          </a>
        </div>
      </section>
    </Layout>
  );
};

export default About;
