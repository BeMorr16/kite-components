import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import Dialog from "./Dialog";
import DialogActions from "./components/DialogActions";
import DialogBody from "./components/DialogBody";
import DialogTitle from "./components/DialogTitle";
import {
  DialogCloseButton,
  DialogSuccessButton,
} from "./components/DialogButtons";

const meta = {
  title: "Components/Dialog",
  component: Dialog,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["full", "default"],
    },
    onClose: { action: "dialog closed" },
    onComplete: { action: "dialog completed" },
  },
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible and accessible dialog component with various configuration options.",
      },
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

// @ts-ignore
export const Basic: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(true);

    const handleClose = () => {
      setIsOpen(false);
      args.onClose();
    };

    const handleComplete = (result: any) => {
      setIsOpen(false);
      args.onComplete?.(result);
    };

    return (
      <div>
        <button onClick={() => setIsOpen(true)}>Open Dialog</button>
        <Dialog
          {...args}
          open={isOpen}
          onClose={handleClose}
          onComplete={handleComplete}
        >
          <DialogTitle>Interactive Dialog</DialogTitle>
          <DialogBody>
            <p>
              This is an interactive dialog that demonstrates various
              features:
            </p>
            <ul>
              <li>Customizable size</li>
              <li>Close on overlay click</li>
              <li>Escape key handling</li>
              <li>Focus trapping</li>
              <li>SuccessButton response logic</li>
            </ul>
          </DialogBody>
          <DialogActions>
            <DialogCloseButton>Cancel</DialogCloseButton>
            <DialogSuccessButton>Confirm</DialogSuccessButton>
          </DialogActions>
        </Dialog>
      </div>
    );
  },
};
