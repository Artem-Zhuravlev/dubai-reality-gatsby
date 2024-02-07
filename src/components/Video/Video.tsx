import React, { memo, useCallback, useEffect, useState } from 'react';
import { VideoButton } from './common/VideoButton';
import { VideCoverImage } from './common/VideoCoverImage';
import './Video.scss';

interface VideoProps {
  url: string;
}

export const Video = memo((props: VideoProps) => {
  const { url } = props;
  const [videoId, setVideoId] = useState<string | null>(null);
  const [isFrameLoading, setIsFrameLoading] = useState(false);

  useEffect(() => {
    const regexp = /(?:youtu\.be\/|\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?/]+)/i;
    const match = url.match(regexp);
    const id = match ? match[1] : null;
    setVideoId(id);
  }, [url]);

  const onLoadFrame = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();

    setIsFrameLoading(prev => !prev);

  }, [isFrameLoading]);

  return (
    <div className="video">
      {
        !isFrameLoading ? (
          <>
            <a
              className="video__link"
              href={`https://youtu.be/${videoId}`}
              onClick={onLoadFrame}
            >
              <VideCoverImage
                videoId={videoId}
              />
            </a>
            <VideoButton />
            </>
        ) : ( 
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0&autoplay=1`}
            allow="autoplay"
            allowFullScreen
            className='video__media'
          />
        ) 
      }
  </div>
  );
});