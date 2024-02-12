import React, { memo } from 'react';
import './Breadcrumbs.scss';
import { Link } from 'gatsby';

export interface BreadcrumbItem {
  to?: string;
  value: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export const Breadcrumbs = memo((props: BreadcrumbsProps) => {
  const { items } = props;

  return (
    <ol className="breadcrumbs">
      {
        items && items.map((item) => (
         <li
          className='breadcrumbs__item'
         >
          { item.to ? (
            <Link
              to={item.to}
              className='breadcrumbs__link'
            >
              {item.value}
            </Link>
          ) : item.value }
         </li>
        ))
      }
    </ol>
  );
});