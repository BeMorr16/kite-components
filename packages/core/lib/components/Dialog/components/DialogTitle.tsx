import React from "react";
import { DialogTitleProps } from "../types";
import { useDialogContext } from "../utils/DialogContext";

const DialogTitle: React.FC<DialogTitleProps> = ({
  children,
  icon,
  className = "",
}) => {
  const { titleIcon: contextIcon, onClose, titleId } = useDialogContext();
  const titleIcon = icon || contextIcon;

  return (
    <div className={`kite-dialog-header ${className}`}>
      <span className="kite-dialog-title-dialog" id={titleId}>
        {titleIcon && (
          <span className="kite-dialog-title-icon">{titleIcon}</span>
        )}
        {children}
      </span>
      <button
        type="button"
        className={`kite-dialog-close ${className}`}
        onClick={() => onClose()}
        aria-label="Close dialog"
      >
        <span>&times;</span>
      </button>
    </div>
  );
};

export default DialogTitle;
