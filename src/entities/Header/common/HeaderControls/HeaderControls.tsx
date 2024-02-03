import React, { memo, useState } from 'react';
import { Button } from '../../../../components/Button/Button';
import './HeaderControls.scss';
import classNames from 'classnames';

interface HeaderControlsProps {
  burgerHandleClick: (value: boolean) => void;
}

export const HeaderControls = memo((props: HeaderControlsProps) => {
  const { burgerHandleClick } = props;
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const onBurgerClick = () => {
    setIsBurgerActive(prev => {
      const newValue = !prev;

      burgerHandleClick(newValue);
      return newValue;
    });
  }

  const burgerClass = classNames(
    'header-controls__burger',
    { 'header-controls__burger--active': isBurgerActive }
  )

  return (
    <div className='header-controls'>
      <Button
        className='header-controls__booking'
      >
        <span className="header-controls__booking-value">
          Book a consultation
        </span>
        <span className="header-controls__booking-icon icon-clipboard" />
      </Button>
      <a
        href="tel:+72126742510"
        className='header-controls__phone'
      >
        <span className="header-controls__phone-value">
          +7 (212) 674-25-10
        </span>
        <span className="header-controls__phone-icon icon-phone" />
      </a>
      <button
        type="button"
        className={burgerClass}
        onClick={onBurgerClick}
        aria-label={isBurgerActive ? 'Close menu' : 'Open Menu'}
      >
        <span />
      </button>
    </div>
  );
});