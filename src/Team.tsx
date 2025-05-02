import React from 'react';
import Layout from './components/Layout';
import './App.css';

// Generated avatars with consistent style
const teamMembers = [
  {
    id: 1,
    name: "Brazil, Arjay V.",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=arjay&backgroundColor=b6e3f4",
    quote: "Building sustainable digital experiences one line of code at a time."
  },
  {
    id: 2,
    name: "Cabataña, Stanley L.",
    avatarUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=Nolan&backgroundColor=ffdfbf,ffd5dc,d1d4f9,b6e3f4,c0aede,65c9ff",
    quote: "Passionate about creating systems that make a positive impact."
  },
  {
    id: 3,
    name: "Calibod, Jayson D.",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=jayson&backgroundColor=d1d4f9",
    quote: "Designing with both people and planet in mind."
  },
  {
    id: 4,
    name: "Camayudo, Joshua J.",
    avatarUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=Amaya&backgroundColor=ffdfbf,ffd5dc,d1d4f9,b6e3f4,c0aede,65c9ff",
    quote: "Bringing eco-friendly ideas from concept to reality."
  },
  {
    id: 5,
    name: "Cancino, Catherine T.",
    avatarUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=Robert&backgroundColor=ffdfbf,ffd5dc,d1d4f9,b6e3f4,c0aede,65c9ff",
    quote: "Creating intuitive experiences that inspire sustainable choices."
  },
  {
    id: 6,
    name: "Canon, Carl C.",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=carl&backgroundColor=ffeba3",
    quote: "Developing mobile solutions for a better tomorrow."
  },
  {
    id: 7,
    name: "Daez, Enricke C.",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=enricke&backgroundColor=d8c3a5",
    quote: "Finding insights in data to drive sustainability innovation."
  },
  {
    id: 8,
    name: "Dimacutac, Jerome P.",
    avatarUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=Ryker&backgroundColor=ffdfbf,ffd5dc,d1d4f9,b6e3f4,c0aede,65c9ff",
    quote: "Building bridges between technology and environmental stewardship."
  },
  {
    id: 9,
    name: "Dumalasa, Edgar N.",
    avatarUrl: "https://api.dicebear.com/9.x/avataaars/svg?seed=Aiden&backgroundColor=65c9ff,b6e3f4,c0aede,ffd5dc",
    quote: "Ensuring our solutions work seamlessly for everyone."
  },
];

const Team = () => {
  return (
    <Layout>
      <div className="team-container">
        <div className="team-hero">
          <h2>Meet Our Team</h2>
          <p className="team-hero-lead">
            The passionate individuals behind Econnect dedicated to making sustainable living accessible, engaging, and impactful.
          </p>
        </div>

        <div className="team-intro">
          <h3>United for a Greener Future</h3>
          <p>
          We are a diverse team of students from Quezon City University, bringing together our passion for technology, design, environmental science, and user experience. We're committed to creating tools that empower everyone to make more sustainable choices in their everyday lives.
          </p>
        </div>

        <div className="team-grid">
          {teamMembers.map((member) => (
            <div key={member.id} className="team-card">
              <div className="avatar-container">
                <img 
                  src={member.avatarUrl} 
                  alt={`${member.name} avatar`} 
                  className="team-avatar"
                />
              </div>
              <h4>{member.name}</h4>
              <p className="team-quote">"{member.quote}"</p>
            </div>
          ))}
        </div>

        <div className="cta-section team-download-cta">
          <h2>Join Our Movement Today!</h2>
          <p>
            Be part of the solution by downloading our app and connecting with like-minded individuals.
            Together, we can make sustainable living the new normal.
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
      </div>
    </Layout>
  );
};

export default Team;
