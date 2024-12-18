import type { Meta, StoryObj } from "@storybook/react";

import { Dashboard } from "./index";
import { BrowserRouter } from "react-router";

const meta = {
  title: "Pages/Dashboard",
  parameters: {
    layout: "centered",
  },
  component: Dashboard,
} satisfies Meta<typeof Dashboard>;

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
