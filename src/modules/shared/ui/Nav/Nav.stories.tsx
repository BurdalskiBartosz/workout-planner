import type { Meta, StoryObj } from "@storybook/react";

import { Nav } from "./index";
import { BrowserRouter } from "react-router";

const meta = {
  title: "Components/Nav",
  parameters: {
    layout: "centered",
  },
  component: Nav,
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Story />
      </BrowserRouter>
    ),
  ],
};
