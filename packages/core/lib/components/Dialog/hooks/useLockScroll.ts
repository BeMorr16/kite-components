import { useEffect } from "react";

// Locks scrolling while accounting for layout shift from scroll bar removal
export default function useLockBodyScroll(lock: boolean = true) {
  useEffect(() => {
    if (!lock) return;
    // Save original styles for restoration
    const originalStyle = window.getComputedStyle(document.body);
    const originalOverflow = originalStyle.overflow;
    const originalPaddingRight = originalStyle.paddingRight;

    // Check for scroll bar width by comparison
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const hasScrollbar = scrollbarWidth > 0;

    //Lock scroll
    document.body.style.overflow = "hidden";

    // Prevent layout shift when changing overflow prop
    if (hasScrollbar) {
      const currentPaddingRight = parseInt(originalPaddingRight);
      document.body.style.paddingRight = `${
        currentPaddingRight + scrollbarWidth
      }px`;
    }

    //Clean up and restore scrolling
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [lock]);
}
