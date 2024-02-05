import React,{ memo } from 'react';
import './Footer.scss';
import {
  FooterTop,
  FooterMain,
  FooterBottom
} from './common';

export const Footer = memo(() => {
  return (
    <footer className='footer'>
      <FooterTop />
      <FooterMain />
      <FooterBottom />
    </footer>
  );
});