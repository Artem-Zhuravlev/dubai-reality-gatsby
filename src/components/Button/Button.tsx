import React, { ReactNode, memo } from 'react';
import classNames from 'classnames';
import './Button.scss';

type ButtonType = 'button' | 'reset' | 'submit';

interface ButtonProps {
  className?: string;
  children: ReactNode;
  buttonType?: ButtonType
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    children,
    buttonType = 'button'
  } = props;

  const btnClasses = classNames(
    'btn',
    className
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