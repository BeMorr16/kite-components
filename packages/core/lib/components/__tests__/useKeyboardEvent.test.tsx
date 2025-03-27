import { describe, test, expect, jest } from "@jest/globals";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import useKeyboardEvent from "../Dialog/hooks/useKeyboardEvent";

const TestComponent = ({
  onKeyPress,
  targetKey,
}: {
  onKeyPress: () => void;
  targetKey: string;
}) => {
  useKeyboardEvent(targetKey, onKeyPress);
  return <div data-testid="test-component">Test</div>;
};

describe("useKeyboardEvent", () => {
  test("should trigger callback when target key is pressed", () => {
    const handleKeyPress = jest.fn();
    render(<TestComponent onKeyPress={handleKeyPress} targetKey="Enter" />);

    fireEvent.keyDown(document, { key: "Enter" });
    expect(handleKeyPress).toHaveBeenCalled();
  });

  test("should not trigger callback when different key is pressed", () => {
    const handleKeyPress = jest.fn();
    render(<TestComponent onKeyPress={handleKeyPress} targetKey="Enter" />);

    fireEvent.keyDown(document, { key: "Escape" });
    expect(handleKeyPress).not.toHaveBeenCalled();
  });
});
