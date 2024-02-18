import React, { memo, useId } from 'react';
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
  const id = useId();

  return (
    <ol className="breadcrumbs">
      {
        items && items.map((item, index) => (
         <li
          className='breadcrumbs__item'
          key={`${id}_${index}`}
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