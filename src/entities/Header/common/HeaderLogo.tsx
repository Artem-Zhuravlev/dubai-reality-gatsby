import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { memo } from 'react';
import logo from 'static/logo.png'

export const HeaderLogo = memo(() => {
  return (
    <div className="header-logo">
      <Link
        to="/"
        className='header-logo__link'
      >
        <img
          src={logo}
          alt="DubaiRealty"
          loading="lazy"
        />
      </Link>
    </div>
  );
});