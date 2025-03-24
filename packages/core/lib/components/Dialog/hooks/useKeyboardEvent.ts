import { useEffect } from "react";

/**
 *
 *
 * @param key
 * @param callback
 * @param deps - Dependencies array for the useeffect
 */
export const useKeyboardEvent = (
  key: string,
  callback: (event: KeyboardEvent) => void,
  deps: React.DependencyList = []
) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === key) {
        callback(event);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line
  }, [key, ...deps]);
};
