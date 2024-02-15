import React, { memo } from 'react';
import classNames from 'classnames';
import './BannerPagination.scss';
import { IBannerSliderItems } from '../../Banner';

interface BannerPaginationProps {
  items: IBannerSliderItems[];
  slideIndex: number;
}

export const BannerPagination = memo((props: BannerPaginationProps) => {
  const { items, slideIndex } = props;

  return (
    <ul className="banner-pagination">
      { items && items.map((item, index) => (
        <li className={
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