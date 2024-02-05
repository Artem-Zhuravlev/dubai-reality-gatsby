import React, { memo, useState } from 'react';
import './Header.scss';
import {
  HeaderLogo,
  HeaderNav,
  HeaderControls
} from './common';

export const Header = memo(() => {
  const [menuOpen, setMenuOpen] = useState(false)

  const onBurgerClick = (value: boolean): void => {
    setMenuOpen(value);
  }

  return (
    <header className='header container-fluid'>
      <HeaderLogo />
      <HeaderNav
        isOpenMenu={menuOpen}
      />
      <HeaderControls
        burgerHandleClick={onBurgerClick}
      />
    </header>
  );
});