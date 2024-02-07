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
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nibh massa, euismod ut libero id, blandit posuere augue. Morbi porta volutpat diam egestas ultrices. Phasellus tempus fringilla neque, nec viverra orci tristique vel. In efficitur vehicula magna, varius pellentesque nisl vehicula vel. Aenean vel sem ac elit commodo finibus in nec massa. Nulla facilisi. Nulla vestibulum venenatis sollicitudin. Etiam auctor mollis justo eu tincidunt. Aliquam varius varius tortor. Cras id venenatis sem. Quisque ut risus ex. Sed et tempor massa. Praesent ac eros hendrerit, congue justo ac, molestie urna. Fusce nec neque vitae dolor dapibus elementum. Maecenas nec orci quis sem condimentum dapibus varius a lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </section>
  );
});