import React, { memo } from 'react';
import './Dropdown.scss';
import { Link } from 'gatsby';

export interface DropdownItem {
  to: string;
  value: string;
}

interface DropdownProps {
  title: string;
  options: DropdownItem[]
}

export const Dropdown = memo((props: DropdownProps) => {
  const { title, options } = props;

  return (
    <details className='dropdown'>
      <summary className='dropdown__title'>
        {title}
      </summary>
      <ul className="dropdown__list">
      {options && options.map(({ to, value }) => (
        <li className='dropdown__item'>
          <Link
            to={to}
            className='dropdown__link'
          >
            {value}
          </Link>
        </li> 
      ))}
      </ul>
    </details>
  );
});