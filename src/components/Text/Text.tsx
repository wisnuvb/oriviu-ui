import React from "react";

import {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  Paragraph,
  Label,
  Span,
  Time,
} from "../../shared";
import { classNames } from "../../shared";

import "./Text.css";

type TVariant =
  | typeof H1
  | typeof H2
  | typeof H3
  | typeof H4
  | typeof H5
  | typeof H6
  | typeof Paragraph
  | typeof Label
  | typeof Span
  | typeof Time;

type TSize = "xl" | "lg" | "base" | "sm" | "xs";

export interface IText {
  text: any;
  variant?: TVariant;
  size?: TSize;
  className?: string;
}

const Text = ({ variant = "p", size, text, className }: IText) => {
  const CustomTag = variant;

  const VARIANTS = {
    h1: typeof H1,
    h2: typeof H2,
    h3: typeof H3,
    h4: typeof H4,
    h5: typeof H5,
    h6: typeof H6,
    p: typeof Paragraph,
    label: typeof Label,
    span: typeof Span,
    time: "time",
  };

  const VARIANT_CLASSES = {
    h1: "heading-1",
    h2: "heading-2",
    h3: "heading-3",
    h4: "heading-4",
    h5: "heading-5",
    h6: "heading-6",
    p: "paragraph",
    label: "label",
    span: "span",
    time: "time",
  };

  const VARIANT_SIZES = {
    xl: "xs",
    lg: "lg",
    base: "base",
    sm: "sm",
    xs: "xs",
  };

  const variantClassName =
    VARIANT_CLASSES[variant] && VARIANT_CLASSES[variant].includes("heading")
      ? VARIANT_CLASSES[variant]
      : size
      ? `${VARIANTS[variant]}-${size && VARIANT_SIZES[size]}`
      : VARIANT_CLASSES[variant];

  // const variantClassName = VARIANT_CLASSES[variant];

  return (
    <CustomTag className={classNames(variantClassName, className)}>
      {text}
    </CustomTag>
  );
};

export default Text;
