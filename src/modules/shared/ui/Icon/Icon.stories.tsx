import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./index";

const meta = {
  title: "Components/Icon",
  parameters: {
    layout: "centered",
  },
  component: Icon,
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    name: "category",
  },
};
