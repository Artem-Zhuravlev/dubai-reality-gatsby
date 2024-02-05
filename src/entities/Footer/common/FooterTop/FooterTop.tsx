import React, { memo } from 'react';
import './FooterTop.scss';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

export const FooterTop = memo(() => {
  return (
    <div className='footer-top container-fluid'>
      <Link
        to="/"
      >
        <StaticImage
          className='footer-top__logo'
          src="../../../../static/logo.png"
          alt="DubaiRealty"
          loading="lazy"
        />
      </Link>
    </div>
  );
});