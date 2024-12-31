import React from 'react';
import Sidebar from '../Sidebar/Sidebar';  // Correct the import path
import Header from './Header';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <Sidebar />
      <div className="ml-[240px] p-6">
        <Header />
        <main className="mt-6">
          {children}
        </main>
      </div>
    </div>
  );
}
