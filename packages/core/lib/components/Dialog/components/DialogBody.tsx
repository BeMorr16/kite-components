import React from "react";
import { DialogBodyProps } from "../types";
import { useDialogContext } from "../utils/DialogContext";

const DialogBody: React.FC<DialogBodyProps> = ({
  children,
  className = "",
}) => {
  // Get bodyId for accessibility
  const { bodyId } = useDialogContext();
  return (
    <div id={bodyId} className={`kite-dialog-body ${className}`}>
      {children}
    </div>
  );
};

export default DialogBody;
