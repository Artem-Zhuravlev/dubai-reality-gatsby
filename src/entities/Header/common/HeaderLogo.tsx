import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React, { memo } from 'react';

export const HeaderLogo = memo(() => {
  return (
    <div className="header-logo">
      <Link
        to="/"
        className='header-logo__link'
      >
        <StaticImage
          src="../../../static/logo.png"
          alt="DubaiRealty"
          loading="lazy"
        />
      </Link>
    </div>
  );
});