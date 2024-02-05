import React ,{ memo } from 'react';
import './BannerNav.scss';

interface BannerNavProps {
  handlePrev: () => void;
  handleNext: () => void;
  slideIndex: number;
  lastSlideIndex: number;
}

export const BannerNav = memo((props: BannerNavProps) => {
  const {
    handlePrev,
    handleNext,
    slideIndex,
    lastSlideIndex
  } = props;

  return (
    <div className="banner-nav">
      <button
        type="button"
        className="banner-nav__control"
        onClick={handlePrev}
        disabled={slideIndex === 0}
      >
        Prev
      </button>
      <button
        type="button"
        className="banner-nav__control"
        onClick={handleNext}
        disabled={slideIndex === lastSlideIndex}
      >
        Next
      </button>
    </div>
  );
});