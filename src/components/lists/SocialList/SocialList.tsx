import React, { memo } from 'react';
import classNames from 'classnames';
import './SocialList.scss';

interface SocialListProps {
  direction?: 'row' | 'column';
}

export const SocialList = memo((props: SocialListProps) => {
  const { direction = 'row' } = props;

  const socialListClass = classNames(
    'social-list',
    direction
  );

  const socialListData = [
    { icon: 'icon-facebook', to: 'https://facebook.com' },
    { icon: 'icon-twitter', to: 'https://twitter.com/' },
    { icon: 'icon-youtube', to: 'https://youtube.com/' },
    { icon: 'icon-instagram', to: 'https://instagram.com' },
    { icon: 'icon-linkedin', to: 'https://linkedin.com' },
  ]

  return (
    <ul
      className={socialListClass}
    >
      {
        socialListData.map(({ icon, to }) => (
          <li
            className="social-list__item"
          >
            <a
              href={to}
              className="social-list__link"
              target="_blank"
            >
              <span
                className={icon}
              />
            </a>
          </li>
        ))
      }
    </ul>
  );
});