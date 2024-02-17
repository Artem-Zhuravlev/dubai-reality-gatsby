import React, { memo } from 'react';
import './NotFound.scss';
import { Link } from 'gatsby';

interface NotFoundProps {
  className?: string
}

export const NotFound = memo((props: NotFoundProps) => {
  const { className } = props;

  return (
    <div className="not-found container-fluid">
      <div className="not-found__content">
        <h1 className='not-found__title'>404</h1>
        <h3>Page not found</h3>
        <Link to="/" className='not-found__link'>Back home</Link>
      </div>
    </div>
  );
});