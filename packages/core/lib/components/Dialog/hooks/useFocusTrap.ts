import { useEffect, useRef } from "react";
import { getFocusableElements } from "../utils/getFocusableElements";

export const useFocusTrap = (
    containerRef: React.RefObject<HTMLDivElement | null>,
    options: { enabled: boolean; titleId: string; }
) => {
    const { enabled, titleId } = options;
      const previousActiveElement = useRef<HTMLElement | null>(null);

      const handleKeyDown = (e: React.KeyboardEvent | KeyboardEvent) => {
        if (!containerRef.current) return;
    
        if (e.key === "Tab") {
          const focusableElements = getFocusableElements(containerRef.current);
          if (focusableElements.length === 0) return;
    
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];
    
          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
    
        if (containerRef.current && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
          const elements = Array.from(
            containerRef.current.querySelectorAll(
              'h1, h2, h3, h4, h5, h6, p, li, span[role="text"], div[role="text"]'
            )
          ) as HTMLElement[];
    
          const visibleElements = elements.filter((el) => {
            const style = window.getComputedStyle(el);
            return (
              style.display !== "none" &&
              style.visibility !== "hidden" &&
              el.textContent?.trim()
            );
          });
    
          if (visibleElements.length > 0) {
            const currentIndex = visibleElements.findIndex(
              (el) => el === document.activeElement
            );
            let nextIndex;
    
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
    
            visibleElements[nextIndex].setAttribute("tabindex", "-1");
            visibleElements[nextIndex].focus();
    
            e.preventDefault();
          }
        }
      };
      useEffect(() => {
        if (enabled && containerRef.current) {
          previousActiveElement.current = document.activeElement as HTMLElement;
    
          const titleElement = document.getElementById(titleId);
          if (titleElement) {
            titleElement.setAttribute("tabindex", "-1");
            titleElement.focus();
          } else {
            const focusableElements = getFocusableElements(containerRef.current);
            if (focusableElements.length > 0) {
              focusableElements[0].focus();
            } else {
                containerRef.current.focus();
            }
          }
    
          containerRef.current.addEventListener("keydown", handleKeyDown);
          return () => {
            containerRef.current?.removeEventListener("keydown", handleKeyDown);
          };
        }
        if (!enabled && previousActiveElement.current) {
          previousActiveElement.current.focus();
        }
        return () => {};
      }, [enabled]);
 
}