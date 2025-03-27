import { describe, test, expect } from "@jest/globals";
import React from "react";
import { render, screen } from "@testing-library/react";
import Dialog from "../Dialog/Dialog";
import DialogBody from "../Dialog/components/DialogBody";

describe("DialogBody", () => {
  test("should render body content", () => {
    render(
      <Dialog open={true} onClose={() => {}} title="Test">
        <DialogBody>Body Content</DialogBody>
      </Dialog>
    );

    expect(screen.getByText("Body Content")).toBeTruthy();
  });

  test("should apply custom className", () => {
    render(
      <Dialog open={true} onClose={() => {}} title="Test">
        <DialogBody className="custom-class">Content</DialogBody>
      </Dialog>
    );

    const body = document.querySelector(".kite-dialog-body");
    expect(body?.classList.contains("custom-class")).toBe(true);
  });
});
