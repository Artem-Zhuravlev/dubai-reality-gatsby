import React, { memo } from 'react';
import './Blockquote.scss';

interface BlockquoteProps {
  cite: string;
  author?: string
}

export const Blockquote = memo((props: BlockquoteProps) => {
  const { author, cite } = props;

  return (
    <blockquote className="blockquote">
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