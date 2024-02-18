import React, { memo } from 'react';
import {
  IGatsbyImageData,
  GatsbyImage,
  getImage
} from 'gatsby-plugin-image';
import './ImageTextCol.scss';

interface ImageTextColProps {
  text: string;
  imageUrl: IGatsbyImageData
}

export const ImageTextCol = memo((props: ImageTextColProps) => {
  const {
    text,
    imageUrl
  } = props
  const image: any = getImage(imageUrl);

  return (
    <div className="image-text-col">
      <GatsbyImage
        image={image}
        alt="placeholder"
        className='image-text-col__img'
      />
      <p>
        {text}
      </p>
    </div>
  );
});