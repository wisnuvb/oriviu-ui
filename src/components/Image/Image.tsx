import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { classNames } from "../../shared";

import "react-lazy-load-image-component/src/effects/blur.css";
import "./Image.css";

export interface ImageProps {
  src: string;
  alt?: string;
  className?: string;
}

const Image = ({ alt, src, className }: ImageProps) => {
  return (
    <LazyLoadImage
      alt={alt}
      src={src}
      className={classNames("w-full h-full object-cover", className)}
    />
  );
};

export default Image;
