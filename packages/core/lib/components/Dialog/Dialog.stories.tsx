import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import Dialog from "./Dialog";
import DialogActions from "./components/DialogActions";
import DialogBody from "./components/DialogBody";
import { DialogCloseButton, DialogSuccessButton } from "./components/DialogButtons";

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
    titleIcon: <p style={{margin: 0}}>😎</p>,
    children: [
      <p>
        This is the dialog content<button>hello</button>
        <button>second in body</button>
        </p>,
        <div>Hello</div>,
        <div>Hello</div>,
        <div>Hello</div>,
        <div>Hello</div>,
        <div>Hello</div>,
        <div>Hello</div>,
        <div>Hello</div>,
        <div>Hello</div>,
        <div>Hello</div>,
        <div>Hello</div>,
        <div>Hello</div>,
        <div>Hello</div>,
        <div>Hello</div>,
        <div>Hello</div>,
        <div>Hello</div>,
        <div>Hello</div>,
        <div>Hello</div>,
        <div>Hello</div>,
        <div>Hello</div>,
        <DialogActions justify="space-between">
          <button>cancel</button>
        <button>Action</button>
      </DialogActions>,
    ],
  },
};

export const WithActions: Story = {
    args: {
      open: true,
      onClose: () => console.log('Dialog closed'),
      onComplete: (status) => console.log(`Dialog completed with status: ${status}`),
      title: 'Confirmation',
      children: [
        <DialogBody key="body">Are you sure you want to proceed?</DialogBody>,
        <DialogActions key="actions">
          <DialogCloseButton onClick={() => {}}>Cancel</DialogCloseButton>
            <DialogSuccessButton onClick={() => {}}>Confirm</DialogSuccessButton>
        </DialogActions>
      ]
    },
    parameters: {
      docs: {
        description: {
          story: 'A dialog with action buttons for confirmation flows.'
        }
      }
    }
  };
