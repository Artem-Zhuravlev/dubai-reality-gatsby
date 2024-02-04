import React, { ReactNode, memo } from 'react';
import { Header } from '../../entities/Header/Header';
import { Footer } from '../../entities/Footer/Footer';

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout = memo(({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />
      <main className="main">
        {children}
      </main>
      <Footer />
    </>
  );
});