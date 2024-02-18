import React, { memo, useId } from 'react';
import { Link } from 'gatsby';

export interface ListItem {
  to: string;
  value: string;
}

interface ListProps {
  title?: string;
  items: ListItem[];
}

export const List = memo(({ title, items }: ListProps) => {
  const id = useId();

  return (
    <div className="list-group">
      {
        title && (
          <h5 className="list-title">{title}</h5>
        )
      }
      <ul className='list'>
        {
          items.map(({ to, value }, index) => (
            <li
              className="list__item"
              key={`${id}_${index}`}
            >
              <Link
                to={to}
                className='list__link'
              >
                {value}
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
});