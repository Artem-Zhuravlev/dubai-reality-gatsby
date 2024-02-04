import React, { memo } from 'react';
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

  return (
    <div className="list-group">
      {
        title && (
          <h5 className="list-title">{title}</h5>
        )
      }
      <ul className='list'>
        {
          items.map(({ to, value }) => (
            <li className="list__item">
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