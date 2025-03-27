import { describe, test, expect } from "@jest/globals";
import React from "react";
import { render, screen } from "@testing-library/react";
import getTitleElement from "../Dialog/utils/getTitleElement";

describe("getTitleElement", () => {
  test("should render h1 element when variant is h1", () => {
    const element = getTitleElement("h1", { id: "test-id" }, "Test Title");
    render(<div>{element}</div>);

    const h1 = document.querySelector("h1");
    expect(h1).toBeTruthy();
    expect(h1?.id).toBe("test-id");
    expect(h1?.textContent).toBe("Test Title");
  });

  test("should render h2 element when variant is h2", () => {
    const element = getTitleElement("h2", { id: "test-id" }, "Test Title");
    render(<div>{element}</div>);

    const h2 = document.querySelector("h2");
    expect(h2).toBeTruthy();
    expect(h2?.id).toBe("test-id");
    expect(h2?.textContent).toBe("Test Title");
  });

  test("should render h3 element when variant is h3", () => {
    const element = getTitleElement("h3", { id: "test-id" }, "Test Title");
    render(<div>{element}</div>);

    const h3 = document.querySelector("h3");
    expect(h3).toBeTruthy();
    expect(h3?.id).toBe("test-id");
    expect(h3?.textContent).toBe("Test Title");
  });

  test("should render h4 element when variant is h4", () => {
    const element = getTitleElement("h4", { id: "test-id" }, "Test Title");
    render(<div>{element}</div>);

    const h4 = document.querySelector("h4");
    expect(h4).toBeTruthy();
    expect(h4?.id).toBe("test-id");
    expect(h4?.textContent).toBe("Test Title");
  });

  test("should render h5 element when variant is h5", () => {
    const element = getTitleElement("h5", { id: "test-id" }, "Test Title");
    render(<div>{element}</div>);

    const h5 = document.querySelector("h5");
    expect(h5).toBeTruthy();
    expect(h5?.id).toBe("test-id");
    expect(h5?.textContent).toBe("Test Title");
  });

  test("should render h6 element when variant is h6", () => {
    const element = getTitleElement("h6", { id: "test-id" }, "Test Title");
    render(<div>{element}</div>);

    const h6 = document.querySelector("h6");
    expect(h6).toBeTruthy();
    expect(h6?.id).toBe("test-id");
    expect(h6?.textContent).toBe("Test Title");
  });

  test("should render h2 element when no variant is provided", () => {
    const element = getTitleElement(undefined, { id: "test-id" }, "Test Title");
    render(<div>{element}</div>);

    const h2 = document.querySelector("h2");
    expect(h2).toBeTruthy();
    expect(h2?.id).toBe("test-id");
    expect(h2?.textContent).toBe("Test Title");
  });

  test("should render h2 element when a non-valid variant is provided", () => {
    // @ts-ignore - Testing invalid input
    const element = getTitleElement("invalid", { id: "test-id" }, "Test Title");
    render(<div>{element}</div>);

    const h2 = document.querySelector("h2");
    expect(h2).toBeTruthy();
    expect(h2?.id).toBe("test-id");
    expect(h2?.textContent).toBe("Test Title");
  });

  test("should pass all props to heading element", () => {
    const element = getTitleElement(
      "h2",
      {
        id: "test-id",
        className: "test-class",
        // @ts-ignore - testing prop passing
        "data-testid": "title-element",
      },
      "Test Title"
    );

    render(<div>{element}</div>);

    const h2 = screen.getByTestId("title-element");
    expect(h2).toBeTruthy();
    expect(h2.id).toBe("test-id");
    expect(h2.className).toBe("test-class");
    expect(h2.textContent).toBe("Test Title");
  });
});
