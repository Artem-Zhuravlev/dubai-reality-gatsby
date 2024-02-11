import React, { memo } from 'react';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';
import './Pagination.scss';

interface PaginationProps extends ReactPaginateProps {
  className?: string;
}

export const Pagination = memo((props: PaginationProps) => {
  const { pageCount } = props;

  return (
    <ReactPaginate
      className='pagination'
      pageCount={pageCount}
      previousLabel="<"
      nextLabel=">"
      renderOnZeroPageCount={null}
    />
  );
});