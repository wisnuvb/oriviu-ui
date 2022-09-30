import React from "react";
import { classNames } from "../../shared";
import Image from "../Image";

import "./Avatar.css";

type TAvatarSize = "xs" | "sm" | "md" | "lg";

export interface AvatarProps {
  userImage: string;
  size?: TAvatarSize;
  alt?: string;
}

const Avatar = ({ userImage, alt = "user", size = "xs" }: AvatarProps) => {
  return (
    <div
      className={classNames("rounded-full overflow-hidden", `avatar-${size}`)}
    >
      <Image src={userImage} alt={alt} />
    </div>
  );
};

export default Avatar;
