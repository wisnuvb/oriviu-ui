import React from "react";

import { classNames } from "../../shared/function/common";

import "./Badge.css";
import "../../../src/styles/tailwind.css";

type TButtonVariant =
  | "primary"
  | "success"
  | "danger"
  | "outline-primary"
  | "outline-success"
  | "outline-danger";

type TButtonSize = "sm" | "md" | "lg" | "xl";

export interface ButtonProps {
  label: string;
  variant?: TButtonVariant;
  size?: TButtonSize;
  rounded?: boolean;
  className?: string;
}

const Badge = (props: ButtonProps) => {
  const { label, variant = "primary", size = "md", rounded, className } = props;

  const mapVariant = {
    primary: "badge-primary",
    success: "badge-success",
    danger: "badge-danger",
    "outline-primary": "badge-outline-primary",
    "outline-success": "badge-outline-success",
    "outline-danger": "badge-outline-danger",
  };

  const mapSize = {
    sm: "badge-sm",
    md: "badge-md",
    lg: "badge-lg",
    xl: "badge-xl",
  };

  return (
    <span
      className={classNames(
        className,
        mapVariant[variant],
        mapSize[size],
        rounded ? "rounded-full" : "rounded-sm"
      )}
    >
      {label}
    </span>
  );
};

export default Badge;
