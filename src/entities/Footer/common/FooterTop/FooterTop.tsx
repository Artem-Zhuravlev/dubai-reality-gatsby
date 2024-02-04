import React, { memo } from 'react';
import './FooterTop.scss';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

interface FooterTopProps {
  className?: string
}

export const FooterTop = memo((props: FooterTopProps) => {
  const { className } = props;

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