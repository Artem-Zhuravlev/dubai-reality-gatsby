import React, { ReactNode, memo } from 'react';
import { Header } from '../../entities/Header/Header';
import { Footer } from '../../entities/Footer/Footer';
import { ModalProvider } from 'context/ModalContext';
import { ContactModal } from 'entities/Contact/ContactModal/ContactModal';

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout = memo(({ children }: MainLayoutProps) => {
  return (
    <>
      <ModalProvider>
        <Header />
        <main className="main">
          {children}
        </main>
        <Footer />
        <ContactModal />
      </ModalProvider>
    </>
  );
});