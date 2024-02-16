import React, { ReactNode, memo } from 'react';
import classNames from 'classnames';
import './Button.scss';

type ButtonType = 'button' | 'reset' | 'submit';

interface ButtonProps {
  className?: string;
  children: ReactNode;
  buttonType?: ButtonType;
  size?: 'large';
  mode?: 'dark' | 'light';
  onClick?: () => void;
  disabled?: boolean;
}

export const Button = (props: ButtonProps) => {
  const {
    className,
    children,
    buttonType = 'button',
    size,
    mode = 'light',
    disabled,
    onClick
  } = props;

  const btnClasses = classNames(
    'btn',
    className,
    size,
    mode
  );

  return (
    <button
      className={btnClasses}
      type={buttonType}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};