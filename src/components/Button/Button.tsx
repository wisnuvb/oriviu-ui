import React from "react";

import { classNames } from "../../shared/function/common";

import "./Button.css";
import "../../../src/styles/tailwind.css";

type TButtonVariant =
  | "link"
  | "primary"
  | "success"
  | "danger"
  | "outline-primary"
  | "outline-success"
  | "outline-danger";

type TButtonSize = "sm" | "md" | "lg" | "xl";

type TButtonType = "button" | "submit" | "reset";

export interface ButtonProps {
  label: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  variant?: TButtonVariant;
  size?: TButtonSize;
  type?: TButtonType;
  rounded?: boolean;
  fullWidth?: boolean;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const {
    label,
    variant = "primary",
    size = "md",
    type = "button",
    rounded,
    fullWidth,
    className,
    onClick,
  } = props;

  const mapVariant = {
    link: "btn-link",
    primary: "btn-primary",
    success: "btn-success",
    danger: "btn-danger",
    "outline-primary": "btn-outline-primary",
    "outline-success": "btn-outline-success",
    "outline-danger": "btn-outline-danger",
  };

  return (
    <button
      type={type}
      className={classNames(
        className,
        mapVariant[variant],
        size,
        rounded ? "rounded-full" : "rounded",
        fullWidth ? "w-full" : ""
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
