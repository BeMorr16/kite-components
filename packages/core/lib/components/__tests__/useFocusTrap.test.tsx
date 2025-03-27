import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import useFocusTrap from "../Dialog/hooks/useFocusTrap";
import "@testing-library/jest-dom";
import {
  afterEach,
  beforeEach,
  describe,
  expect,
  jest,
  test,
} from "@jest/globals";

import getFocusableElements from "../Dialog/utils/getFocusableElements";
// Import whole function and map the entire module
jest.mock("../Dialog/utils/getFocusableElements", () => {
  return {
    __esModule: true,
    default: jest.fn((container: HTMLElement | null) => {
      if (!container) return [];
      return Array.from(container.querySelectorAll("button, input"));
    }),
  };
});

const TestComponent = ({ enabled = true }) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const titleId = "test-title";

  useFocusTrap(containerRef, { enabled, titleId });

  return (
    <div ref={containerRef} data-testid="container">
      <h2 id={titleId}>Dialog Title</h2>
      <button data-testid="first-button">First Button</button>
      <input data-testid="text-input" type="text" />
      <button data-testid="last-button">Last Button</button>
    </div>
  );
};

describe("useFocusTrap", () => {
  // @ts-ignore Its working
  let focusMock: jest.SpyInstance;

  beforeEach(() => {
    jest.clearAllMocks();
    // Create a mock for the focus method
    focusMock = jest.spyOn(HTMLElement.prototype, "focus");
  });

  afterEach(() => {
    // Clean up mock
    focusMock.mockRestore();
  });

  test("should focus on the title element when enabled", () => {
    render(<TestComponent />);

    const titleElement = screen.getByText("Dialog Title");
    expect(document.activeElement).toBe(titleElement);
  });

  test("should trap focus within the container", () => {
    render(<TestComponent />);

    const firstButton = screen.getByTestId("first-button");
    const lastButton = screen.getByTestId("last-button");

    // Focus the last button
    lastButton.focus();
    expect(document.activeElement).toBe(lastButton);

    // Tab key - loop to first button
    fireEvent.keyDown(lastButton, { key: "Tab" });
    expect(document.activeElement).toBe(firstButton);
  });
});
