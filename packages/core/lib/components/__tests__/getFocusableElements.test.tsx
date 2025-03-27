import { describe, test, expect, beforeEach, afterEach } from "@jest/globals";
import getFocusableElements from "../Dialog/utils/getFocusableElements";

describe("getFocusableElements", () => {
  let container: HTMLElement;

  beforeEach(() => {
    // Set up a test container to get elements of
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(() => {
    // clean up container
    document.body.removeChild(container);
  });

  test("should return all focusable elements", () => {
    container.innerHTML = `
      <a href="#" id="link1">Link</a>
      <button id="button1">Button</button>
      <input id="input1" type="text" />
      <textarea id="textarea1"></textarea>
      <select id="select1"><option>Option</option></select>
      <div tabindex="0" id="div1">Div with tabindex</div>
    `;

    const focusableElements = getFocusableElements(container);

    expect(focusableElements.length).toBe(6);
    expect(focusableElements.map((el) => el.id)).toEqual([
      "link1",
      "button1",
      "input1",
      "textarea1",
      "select1",
      "div1",
    ]);
  });

  test("should exclude disabled elements", () => {
    container.innerHTML = `
      <button id="button1">Button</button>
      <button id="button2" disabled>Disabled Button</button>
      <input id="input1" type="text" />
      <input id="input2" type="text" disabled />
    `;

    const focusableElements = getFocusableElements(container);

    expect(focusableElements.length).toBe(2);
    expect(focusableElements.map((el) => el.id)).toEqual(["button1", "input1"]);
  });
});
