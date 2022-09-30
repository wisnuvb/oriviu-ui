import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Text from "./Text";

export default {
  title: "Component/Text",
  component: Text,
  // args: {
  //   text: { control: { type: "text" } },
  // },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});

Default.args = {
  text: "This is just for testing",
  variant: "p",
  size: "base",
};
