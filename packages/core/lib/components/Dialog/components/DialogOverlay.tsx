import React from "react";
import { DialogOverlayProps } from "../types";

const DialogOverlay: React.FC<DialogOverlayProps> = ({
  children,
  onClick,
  className = "",
}) => {
  return (
    <div className={`kite-dialog-overlay ${className}`} onClick={onClick}>
      {children}
    </div>
  );
};

export default DialogOverlay;
