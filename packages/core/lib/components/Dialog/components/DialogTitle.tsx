import React from "react";
import { DialogTitleProps } from "../types";
import { useDialogContext } from "../utils/DialogContext";

const DialogTitle: React.FC<DialogTitleProps> = ({
  children,
  icon,
  className = "",
}) => {
  const { titleIcon: contextIcon, onClose } = useDialogContext();
  const titleIcon = icon || contextIcon;

  return (
    <div className={`kite-dialog-header ${className}`}>
      <h2 className="kite-dialog-title">
        {titleIcon && (
          <span className="kite-dialog-title-icon">{titleIcon}</span>
        )}
        {children}
      </h2>
      <button
        type="button"
        className={`kite-dialog-close ${className}`}
        onClick={onClose}
        // Placeholder for future ARIA attributes
      >
        <span>&times;</span>
      </button>
    </div>
  );
};

export default DialogTitle;
