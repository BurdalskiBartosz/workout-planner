import type { Meta, StoryObj } from "@storybook/react";

import { BrowserRouter, Route, Routes } from "react-router";
import { Dashboard } from "./index";
import { AppTemplate } from "@/modules/app/templates/AppTemplate";

const meta = {
  title: "Pages/Dashboard",
  parameters: {
    layout: "fullscreen",
  },
  component: Dashboard,
} satisfies Meta<typeof Dashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  decorators: [
    (Story) => (
      <BrowserRouter>
        <Routes>
          <Route element={<AppTemplate />}>
            <Route path="*" element={<Story />} />
          </Route>
        </Routes>
      </BrowserRouter>
    ),
  ],
};
