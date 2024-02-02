import React, { ReactNode, memo } from 'react';
import './Button.scss';

interface ButtonProps {
  className?: string;
  children: ReactNode;
}

export const Button = memo((props: ButtonProps) => {
  const { className, children } = props;

  return (
    <button
      className="btn"
    >
      {children}
    </button>
  );
});