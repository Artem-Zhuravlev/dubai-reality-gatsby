import React, { memo, useState } from 'react';
import './Header.scss';
import {
  HeaderLogo,
  HeaderNav,
  HeaderControls
} from './common';

interface HeaderProps {
  className?: string
}

export const Header = memo((props: HeaderProps) => {
  const { className } = props;
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