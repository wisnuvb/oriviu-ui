import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Avatar from "./Avatar";

export default {
  title: "Component/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <div className="w-full">
    <Avatar {...args} />
  </div>
);

export const Default = Template.bind({});

Default.args = {
  alt: "This is just for testing",
  userImage:
    "https://space-kd.sgp1.digitaloceanspaces.com/anekaukm/user/62ff9dcc-85ee-4ccf-9545-705fc4ad73b1.jpg",
};
