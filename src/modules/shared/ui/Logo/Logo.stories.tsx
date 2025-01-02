import type { Meta, StoryObj } from "@storybook/react";
import { Logo } from "./index";

const meta = {
  title: "Components/Logo",
  parameters: {
    layout: "centered",
  },
  component: Logo,
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    to: "/",
    label: "Link",
  },
};
