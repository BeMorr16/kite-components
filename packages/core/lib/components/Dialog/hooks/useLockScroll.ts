import { useEffect } from "react";

/**
 *
 *
 * @param lock
 */
export const useLockBodyScroll = (lock: boolean = true) => {
  useEffect(() => {
    if (!lock) return;

    const originalStyle = window.getComputedStyle(document.body);
    const originalOverflow = originalStyle.overflow;
    const originalPaddingRight = originalStyle.paddingRight;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const hasScrollbar = scrollbarWidth > 0;

    document.body.style.overflow = "hidden";

    if (hasScrollbar) {
      const currentPaddingRight = parseInt(originalPaddingRight);
      document.body.style.paddingRight = `${
        currentPaddingRight + scrollbarWidth
      }px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [lock]);
};
