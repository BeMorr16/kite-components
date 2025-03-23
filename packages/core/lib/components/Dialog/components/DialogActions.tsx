import React from "react";
import { DialogActionsProps } from "../types";

const DialogActions: React.FC<DialogActionsProps> = ({
  children,
  justify = "end",
  className = "",
}) => {
  return (
    <div
      className={`kite-dialog-actions kite-dialog-actions--${justify} ${className}`}
    >
      {children}
    </div>
  );
};

export default DialogActions;
