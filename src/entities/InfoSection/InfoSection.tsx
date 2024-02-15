import React, { memo } from 'react';
import './InfoSection.scss';

interface InfoSectionProps {
  className?: string
}

export const InfoSection = memo((props: InfoSectionProps) => {
  const { className } = props;

  return (
    <section className="info-section section">
      <div className="container-small">
        <strong
          className="info-section__heading"
        >
          Our expertise
        </strong>
        <h2 className="h1 info-section__title">
          "The best apartment in Dubai" we will find your dream
        </h2>
        <p>"The epitome of luxury living in Dubai" awaits your discovery. Immersed in opulence, amidst the gleaming skyline, Where dreams unfold in each corner refined. Elegance personified, a haven beyond compare, With vistas that captivate, and indulgence in the air. From lavish interiors to panoramic views, Every detail crafted to enchant and enthuse. Where comfort meets sophistication, a symphony of delight, In the heart of Dubai, where dreams take flight. Experience grandeur unparalleled, a true retreat, Where luxury knows no bounds, and every whim meets. Discover the pinnacle of urban living, a class apart, For those who seek the finest, an unparalleled start. This is more than an apartment, it's a lifestyle supreme, In Dubai's finest, your dreams find their gleam.</p>
      </div>
    </section>
  );
});