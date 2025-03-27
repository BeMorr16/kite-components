import React from "react";
import { DialogTitleProps } from "../types";
import { useDialogContext } from "../utils/DialogContext";

const DialogTitle: React.FC<DialogTitleProps> = ({
  children,
  icon,
  className = "",
}) => {
  // Get context values
  const { titleIcon: contextIcon, onClose, titleId } = useDialogContext();
  // Use icon provided to DialogTitle or fallback to Dialog component prop titleIcon
  const titleIcon = icon || contextIcon;

  return (
    <div className={`kite-dialog-header ${className}`}>
      <span className="kite-dialog-title-dialog" id={titleId}>
        {titleIcon && (
          <span className="kite-dialog-title-icon" aria-hidden="true">
            {titleIcon}
          </span>
        )}
        {children}
      </span>
      <button
        type="button"
        className={`kite-dialog-close ${className}`}
        onClick={() => onClose()}
        aria-label="Close dialog"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};

export default DialogTitle;
