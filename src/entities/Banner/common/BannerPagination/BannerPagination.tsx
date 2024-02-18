import React, { memo, useId } from 'react';
import classNames from 'classnames';
import './BannerPagination.scss';
import { ICard } from 'interfaces/ICard';

interface BannerPaginationProps {
  items: ICard[];
  slideIndex: number;
}

export const BannerPagination = memo((props: BannerPaginationProps) => {
  const { items, slideIndex } = props;
  const id = useId();

  return (
    <ul className="banner-pagination">
      { items && items.map((item, index) => (
        <li
          key={`${id}_${index}`}
          className={
            classNames(
              'banner-pagination__item',
              { 'banner-pagination__item--active' : slideIndex === index }
            )
        }>
          {item.frontmatter.title}
        </li>
      )) }
    </ul>
  );
});