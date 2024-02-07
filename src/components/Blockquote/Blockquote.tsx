import React, { memo } from 'react';
import './Blockquote.scss';
import classNames from 'classnames';

interface BlockquoteProps {
  cite: string;
  author?: string;
  className?: string;
}

export const Blockquote = memo((props: BlockquoteProps) => {
  const { author, cite, className } = props;
  const blockquoteClass = classNames(
    'blockquote',
    className
  )

  return (
    <blockquote className={blockquoteClass}>
      <p>
        {cite}
        {
        author && (
          <cite
            className='blockquote__author'
          >
            — {author}
          </cite>
        )
      }
      </p>
      
      
    </blockquote>
  );
});