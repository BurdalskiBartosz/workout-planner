import type { Meta, StoryObj } from "@storybook/react";

import { BrowserRouter, Route, Routes } from "react-router";
import { WorkoutPlans } from "./index";
import { AppTemplate } from "@/modules/app/templates/AppTemplate/AppTemplate";

const meta = {
  title: "Pages/WorkoutPlans",
  parameters: {
    layout: "fullscreen",
  },
  component: WorkoutPlans,
} satisfies Meta<typeof WorkoutPlans>;

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
