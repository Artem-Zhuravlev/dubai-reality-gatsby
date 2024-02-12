import React, { memo } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import './ImageTextCol.scss';

interface ImageTextColProps {
  className?: string
}

export const ImageTextCol = memo((props: ImageTextColProps) => {
  const { className } = props;

  return (
    <div className="image-text-col">
      <StaticImage
        src="../../static/placeholder.jpg"
        alt="placeholder"
        className='image-text-col__img'
      />
      <p>
      Sed in sem pellentesque, eleifend erat vitae, tincidunt turpis. Pellentesque augue elit, rutrum sit amet commodo vel, porta quis purus. Nullam faucibus, odio eu bibendum auctor, eros dolor aliquet purus, sit amet pellentesque neque est id tortor. In egestas, erat a dapibus dapibus, mi augue ornare lorem, nec pretium ligula purus nec tellus. Aenean a scelerisque nisi. Nullam pretium fermentum nunc, feugiat placerat urna rutrum eget. Nullam mattis justo consequat risus. Donec imperdiet enim id efficitur pharetra. Nam sollicitudin at est eget auctor. Ut sed ante quis nulla tincidunt auctor. Quisque accumsan pretium tincidunt. Etiam viverra ultrices est vitae suscipit. Pellentesque elementum purus non nisl pharetra consequat. Nunc in venenatis orci.
      </p>
    </div>
  );
});