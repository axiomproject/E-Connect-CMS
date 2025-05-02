import React from 'react';
import Header from './Header';
import Footer from './Footer';

const layoutStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
};

const bodyStyle: React.CSSProperties = {
  flex: 1,
  padding: '1.5rem 2rem',
  background: 'none',
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={layoutStyle}>
    <Header />
    <main style={bodyStyle}>{children}</main>
    <Footer />
  </div>
);

export default Layout;
