import React, { memo } from 'react';
import './ContentSection.scss';
import { Blockquote } from 'components/Blockquote/Blockquote';
import { ImageTextCol } from 'components/lists';

export const ContentSection = memo((props) => {
  return (
    <section className='content-section section'>
      <div className="container">
        <Blockquote
          className='content-section__blockquote'
          cite="“Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.”"
          author="Mary Kay Ash"
        />
        <div className="content-section__row">
          <ImageTextCol />
          <ImageTextCol />
        </div>
      </div>
    </section>
  );
});