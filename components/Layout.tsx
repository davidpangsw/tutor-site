// components/Layout.tsx
import React, { ReactNode } from 'react';
// import Header from './Header'; // Assuming you have a Header component
// import Footer from './Footer'; // Assuming you have a Footer component

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      {/* <Header /> */}
      <h1>Testing</h1>
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
