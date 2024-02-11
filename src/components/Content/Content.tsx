import React, { memo } from 'react';
import './Content.scss';

interface ContentProps {
  content: string;
}

export const Content = memo((props: ContentProps) => {
  const { content } = props;

  return (
    <div
      className="content container"
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
});