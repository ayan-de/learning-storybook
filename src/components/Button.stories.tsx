import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { action } from 'storybook/actions';


import { Button } from "./Button";

const meta = {
  title: "Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  tags: ["autodocs"],
  parameters: {
    layout: "centered", // Centers the component in the Canvas
  },
  args: { onClick: action('on-click') },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: "Primary Button",
    icon: true,
    textareaValue: "🔍"
  },
};

export const Secondary: Story = {
  args: {
    textareaValue: "🔍",
    label: "Secondary Button",
  },
};

export const Large: Story = {
  args: {
    textareaValue: "🔍",
    size: "large",
    label: "Large Button",
  },
};

export const Small: Story = {
  args: {
    textareaValue: "🔍",
    size: "small",
    label: "Small Button",
  },
};