import { createContext, useContext } from "react";
import { DialogContextType } from "../types";

// Context to share dialog state with child components
const DialogContext = createContext<DialogContextType | undefined>(undefined);

// Hook to access context
export const useDialogContext = () => {
  const context = useContext(DialogContext);
  if (!context) {
    throw new Error("Dialog components must be used within a Dialog");
  }
  return context;
};

export default DialogContext;
