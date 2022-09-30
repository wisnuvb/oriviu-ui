import React from "react";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

import { classNames } from "../../shared";
import Text from "../Text";

import "./Card.css";

type TCardVariant = "primary" | "success" | "danger" | "neutral";

export interface CardProps {
  variant: TCardVariant;
  className?: string;
  headerTitle?: string;
  headerSubtitle?: string;
  headerAction?: React.ReactNode;
  children?: React.ReactNode;
}

const Card = ({
  className,
  variant = "neutral",
  headerTitle,
  headerSubtitle,
  headerAction,
  children,
}: CardProps) => {
  const mapVariant = {
    neutral: "card-neutral",
    primary: "card-primary",
    success: "card-success",
    danger: "card-danger",
  };

  return (
    <div className={classNames("card", mapVariant[variant], className)}>
      <div
        className={classNames(
          "card-header",
          variant !== "neutral" ? "text-white" : "text-primary"
        )}
      >
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <Text text={headerTitle} variant="h3" className="leading-none" />
            <ChevronRightIcon className="w-5 h-5" />
          </div>
          <Text text={headerSubtitle} variant="span" />
        </div>
        <div>{headerAction}</div>
      </div>
      <div className="pt-4">{children}</div>
    </div>
  );
};

export default Card;
