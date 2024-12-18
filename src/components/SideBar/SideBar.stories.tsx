import type { Meta, StoryObj } from "@storybook/react";

import { SideBar } from "./index";
import { BrowserRouter } from "react-router";

const meta = {
  title: "Components/SideBar",
  parameters: {
    layout: "centered",
  },
  component: SideBar,
} satisfies Meta<typeof SideBar>;

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
