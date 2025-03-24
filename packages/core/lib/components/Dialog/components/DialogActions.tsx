import React from "react";
import { DialogActionsProps } from "../types";
import { useDialogContext } from "../utils/DialogContext";

const DialogActions: React.FC<DialogActionsProps> = ({
  children,
  justify = "end",
  className = "",
}) => {
  const { actionsId } = useDialogContext();
  return (
    <div
      id={actionsId}
      className={`kite-dialog-actions kite-dialog-actions--${justify} ${className}`}
      role="group"
      aria-label="Dialog actions"
    >
      {children}
    </div>
  );
};

export default DialogActions;
