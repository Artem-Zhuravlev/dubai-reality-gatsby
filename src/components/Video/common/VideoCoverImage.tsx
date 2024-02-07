import React, { memo } from 'react';
import '../Video.scss';

interface VideCoverImageProps {
  videoId: string | null;
}

export const VideCoverImage = memo((props: VideCoverImageProps) => {
  const { videoId } = props;

  return (
    <picture>
      <source
        srcSet={`https://i.ytimg.com/vi_webp/${videoId}/maxresdefault.webp`}
        type="image/webp" />
      <img
        className="video__media"
        src={`https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`}
        alt="1. Пилот, разборы, ответы и лайвы" />
    </picture>
  );
});