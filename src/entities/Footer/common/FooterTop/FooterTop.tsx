import React, { memo } from 'react';
import './FooterTop.scss';
import { Link } from 'gatsby';
import logo from 'static/logo.png'

export const FooterTop = memo(() => {
  return (
    <div className='footer-top container-fluid'>
      <Link
        to="/"
      >
        <img
          className='footer-top__logo'
          src={logo}
          alt="DubaiRealty"
          loading="lazy"
        />
      </Link>
    </div>
  );
});