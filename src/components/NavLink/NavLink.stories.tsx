import type { Meta, StoryObj } from "@storybook/react";

import { NavLink } from "./index";
import { BrowserRouter } from "react-router";
import { Category } from "../icons";

const meta = {
  title: "Components/NavLink",
  parameters: {
    layout: "centered",
  },
  component: NavLink,
} satisfies Meta<typeof NavLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    to: "/",
    label: "Link",
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};
export const WithIcon: Story = {
  args: {
    to: "/",
    label: "Link",
    icon: <Category />,
  },
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};
