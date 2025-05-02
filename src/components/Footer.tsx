import React from 'react';

const Footer: React.FC = () => (
  <footer style={{ padding: '1rem', background: '#222', color: '#fff', marginTop: 'auto' }}>
    <p>&copy; {new Date().getFullYear()} E-Connect</p>
  </footer>
);

export default Footer;
