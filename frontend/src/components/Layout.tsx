// src/components/Layout.tsx
import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

interface LayoutProps {
  role: 'user' | 'photographer';
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ role, children }) => {
  return (
    <main className="relative bg-orange-100">
      <Navbar />
      <div className="flex">
        <Sidebar role={role} />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
    </main>
  );
};

export default Layout;
