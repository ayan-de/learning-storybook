import {Meta, StoryObj} from "@storybook/react";
import {Search} from "./Search";

const meta = {
  title: "Search",
  component: Search,
  parameters: {
    layout: "centered", // Centers the component in the Canvas
  },
  args: {  },
} satisfies Meta<typeof Search>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Search tasks...",
  },
};

export const WithCustomPlaceholder: Story = {
  args: {
    placeholder: "Type to search...",
  },
};

export const WithLongPlaceholder: Story = {
  args: {
    placeholder: "Search for tasks, projects, or anything else you need to find quickly...",
  },
};

export const WithNoPlaceholder: Story = {
  args: {
    placeholder: "",
    logo: true
  },
};