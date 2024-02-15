import { Link } from 'gatsby';
import React, { memo } from 'react';
import { Dropdown, DropdownItem } from 'components/form';
import './HeaderNav.scss';
import classNames from 'classnames';

interface HeaderNavProps {
  isOpenMenu: boolean
}

export const HeaderNav = memo(({ isOpenMenu }: HeaderNavProps) => {
  const dropdownList: DropdownItem[] = [
    { to: '/buy/house-in-dubai/', value: "House in Dubai" },
    { to: '/buy/apartments-in-dubai', value: "Apartments in Dubai" },
    { to: '/buy/villa-in-dubai', value: "Villa in Dubai" },
  ]

  const headerNavClass = classNames(
    'header-nav',
    {
      'header-nav--active': isOpenMenu
    }
  )

  return (
    <nav className={headerNavClass}>
      <ul className="header-nav__list">
        <li className='header-nav__item'>
          <Dropdown
            title="Buy"
            options={dropdownList}
          />
        </li>
        <li className="header-nav__item">
          <Link
            to="/blog"
            className='header-nav__link'
          >
            Blog
          </Link>
        </li>
        <li className="header-nav__item">
          <Link
            to="/about-company"
            className='header-nav__link'
          >
            About
          </Link>
        </li>
        <li className="header-nav__item">
          <Link
            to="/contacts"
            className='header-nav__link'
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
});