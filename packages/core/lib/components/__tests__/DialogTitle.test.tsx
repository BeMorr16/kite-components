import { describe, test, expect, jest } from "@jest/globals";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Dialog from "../Dialog/Dialog";
import DialogTitle from "../Dialog/components/DialogTitle";

describe("DialogTitle", () => {
  test("should render title content", () => {
    render(
      <Dialog open={true} onClose={() => {}}>
        <DialogTitle>Custom Title</DialogTitle>
        <div>Content</div>
      </Dialog>
    );

    expect(screen.getByText("Custom Title")).toBeTruthy();
  });

  test("should render with icon", () => {
    render(
      <Dialog open={true} onClose={() => {}}>
        <DialogTitle icon={<span data-testid="title-icon">Icon</span>}>
          Title with Icon
        </DialogTitle>
        <div>Content</div>
      </Dialog>
    );

    expect(screen.getByTestId("title-icon")).toBeTruthy();
  });

  test("should call onClose when close button is clicked", () => {
    const handleClose = jest.fn();

    render(
      <Dialog open={true} onClose={handleClose} title="Test Dialog">
        <div>Dialog content</div>
      </Dialog>
    );

    const closeButton = screen.getByLabelText("Close dialog");
    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});
