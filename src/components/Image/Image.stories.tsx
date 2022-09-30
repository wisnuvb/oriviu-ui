import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Image from "./Image";

export default {
  title: "Component/Image",
  component: Image,
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => (
  <div className="w-full">
    <div className="w-56 h-36">
      <Image {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});

Default.args = {
  alt: "This is just for testing",
  src: "https://space-kd.sgp1.digitaloceanspaces.com/anekaukm/blogs/9672b275-ad04-447b-843d-463145eb0bf1.jpeg-large",
};
