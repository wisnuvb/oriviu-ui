import React from "react";
import { Meta, Story } from "@storybook/react";

import Button from "./Button";

export default {
  title: "Component/Button",
  component: Button,
  argTypes: {
    label: { control: { type: "text" } },
  },
} as Meta;

export const Default: Story = (args) => (
  <div className="w-full">
    <Button label={args.label} onClick={() => {}} {...args} />
  </div>
);

Default.args = {
  label: "Kirim",
  variant: "primary",
  size: "md",
  type: "button",
  rounded: true,
  fullWidth: false,
};
