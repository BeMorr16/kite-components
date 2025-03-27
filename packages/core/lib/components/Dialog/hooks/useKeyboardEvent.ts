import { useEffect } from "react";

// Listens for key and calls callback
// dependency array for the use effect
export default function useKeyboardEvent(
  key: string,
  callback: (event: KeyboardEvent) => void,
  deps: React.DependencyList = []
) {
  useEffect(() => {
    //Checks for specific key before calling
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === key) {
        callback(event);
      }
    }
    //Add listener
    document.addEventListener("keydown", handleKeyDown);

    //Clean up
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line
  }, [key, ...deps]);
}
