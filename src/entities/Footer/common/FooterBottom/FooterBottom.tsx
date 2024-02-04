import React, { memo } from 'react';
import './FooterBottom.scss';
import { SocialList } from '../../../../components/SocialList/SocialList';

export const FooterBottom = memo(() => {

  return (
    <div className="footer-bottom container-fluid">
      <small className='footer-bottom__copyright'>Copyright&copy; <time dateTime="2024">2024</time> Dubai Realty</small>
      <SocialList />
    </div>
  );
});
