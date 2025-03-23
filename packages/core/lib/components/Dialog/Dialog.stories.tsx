import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Dialog from "./Dialog";
import DialogActions from "./components/DialogActions";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: {
    open: true,
    onClose: () => console.log("Dialog closed"),
    title: "Dialog Title",
    titleIcon: <p>I</p>,
    children: [
      <p>
        This is the dialog content<button>hello</button>
        <button>second</button>
      </p>,
      <DialogActions>
        <button>Action 1</button>
      </DialogActions>,
    ],
  },
};
