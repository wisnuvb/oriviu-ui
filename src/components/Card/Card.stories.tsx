import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Card from "./Card";
import Button from "../Button";

export default {
  title: "Component/Card",
  component: Card,
  argTypes: {
    children: { control: { type: "text" } },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => {
  const { children, ...rest } = args;
  return (
    <div className="w-full h-80 p-8 bg-background">
      <Card {...rest}>{children}</Card>
    </div>
  );
};

export const Default = Template.bind({});

Default.args = {
  variant: "neutral",
  headerTitle: "Monitoring Nilai",
  headerSubtitle: "Rata - Rata Skor Nilai < 60",
  headerAction: <Button label="Prilaku" onClick={() => {}} rounded />,
  children: "This is content of card",
};
