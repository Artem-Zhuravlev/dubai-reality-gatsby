import React, { ReactNode, memo } from 'react';
import classNames from 'classnames';
import './Button.scss';

type ButtonType = 'button' | 'reset' | 'submit';

interface ButtonProps {
  className?: string;
  children: ReactNode;
  buttonType?: ButtonType;
  size?: 'large'
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    buttonType = 'button',
    size
  } = props;

  const btnClasses = classNames(
    'btn',
    className,
    size
  );

  return (
    <button
      className={btnClasses}
      type={buttonType}
    >
      {children}
    </button>
  );
});