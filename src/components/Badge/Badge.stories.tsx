import React from "react";
import { Meta, Story } from "@storybook/react";

import Badge from "./Badge";

export default {
  title: "Component/Badge",
  component: Badge,
  argTypes: {
    label: { control: { type: "text" } },
  },
} as Meta;

export const Default: Story = (args) => (
  <div className="w-full">
    <Badge
      variant={args.variant}
      label={args.label}
      size={args.size}
      rounded={args.rounded}
      className={args.className}
    />
  </div>
);

Default.args = {
  label: "Artikel",
  variant: "primary",
  size: "sm",
  rounded: true,
};
