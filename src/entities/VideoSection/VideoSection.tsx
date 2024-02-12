import React, { memo } from "react";
import { Video } from "components/Video/Video";

interface VideoSectionProps {
  className?: string
}

export const VideoSection = memo((props: VideoSectionProps) => {
  return (
    <div className="container section">
      <Video url="https://www.youtube.com/watch?v=zSVjsQ34otY"/>
    </div>
  );
});