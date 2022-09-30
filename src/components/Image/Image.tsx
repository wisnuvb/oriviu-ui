import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import { classNames } from "../../shared";

import "react-lazy-load-image-component/src/effects/blur.css";

export interface ImageProps {
  src: string;
  alt?: string;
}

const Image = ({ alt, src }: ImageProps) => {
  return <LazyLoadImage alt={alt} src={src} className={classNames()} />;
};

export default Image;
