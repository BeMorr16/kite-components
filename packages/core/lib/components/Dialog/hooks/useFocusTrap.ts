import { useEffect, useRef } from "react";
import getFocusableElements from "../utils/getFocusableElements";

/**
 *
 *  Hook that traps focus:
 *  - Saves previous focused element. Restores focus on close
 *  - Focuses on title or first focuable element when opened
 *  - Traps focus inside
 *  - Tab interactive elements. arrow keys non interactive
 *
 */
export default function useFocusTrap(
  containerRef: React.RefObject<HTMLDivElement | null>,
  options: { enabled: boolean; titleId: string }
) {
  const { enabled, titleId } = options;
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Key event handler to trap focus
  // Tab interactive elements. arrow keys non interactive
  function handleKeyDown(e: React.KeyboardEvent | KeyboardEvent) {
    if (!containerRef.current) return;

    // Handle tab key
    if (e.key === "Tab") {
      const focusableElements = getFocusableElements(containerRef.current);
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      // Shift + tab on first -> jump to last
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
        // Tab on last -> jump to first
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
    // Handle arrow keys
    if (
      containerRef.current &&
      (e.key === "ArrowDown" || e.key === "ArrowUp")
    ) {
      // Find semantic text elements
      const elements = Array.from(
        containerRef.current.querySelectorAll(
          'h1, h2, h3, h4, h5, h6, p, li, span[role="text"], div[role="text"]'
        )
      ) as HTMLElement[];

      //Filter for visible elements
      const visibleElements = elements.filter((el) => {
        const style = window.getComputedStyle(el);
        return (
          style.display !== "none" &&
          style.visibility !== "hidden" &&
          el.textContent?.trim()
        );
      });

      if (visibleElements.length > 0) {
        // Find index of current focus
        const currentIndex = visibleElements.findIndex(
          (el) => el === document.activeElement
        );
        let nextIndex;

        // Find next index based off key
        if (e.key === "ArrowDown") {
          nextIndex =
            currentIndex < 0 ? 0 : (currentIndex + 1) % visibleElements.length;
        } else {
          nextIndex =
            currentIndex < 0
              ? visibleElements.length - 1
              : (currentIndex - 1 + visibleElements.length) %
                visibleElements.length;
        }

        // Move focus
        visibleElements[nextIndex].setAttribute("tabindex", "-1");
        visibleElements[nextIndex].focus();
        visibleElements[nextIndex].removeAttribute("tabindex");

        e.preventDefault();
      }
    }
  }
  useEffect(() => {
    if (enabled && containerRef.current) {
      //Store active element
      previousActiveElement.current = document.activeElement as HTMLElement;

      // Focus on title initially. If no title then first focusable element
      const titleElement = document.getElementById(titleId);
      if (titleElement) {
        titleElement.setAttribute("tabindex", "-1");
        titleElement.focus();
      } else {
        const focusableElements = getFocusableElements(containerRef.current);
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        } else {
          // No elements -> focus on container
          containerRef.current.focus();
        }
      }

      // Set up listener
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
    // Restore focus on close
    if (!enabled && previousActiveElement.current) {
      previousActiveElement.current.focus();
    }
    return () => {};
  }, [enabled]);
}
