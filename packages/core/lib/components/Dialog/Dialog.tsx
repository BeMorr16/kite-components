import React, { isValidElement, useRef } from "react";
import { createPortal } from "react-dom";
import DialogContext from "./utils/DialogContext";
import { DialogProps } from "./types";
import DialogOverlay from "./components/DialogOverlay";
import DialogTitle from "./components/DialogTitle";
import DialogBody from "./components/DialogBody";
import DialogActions from "./components/DialogActions";
import "./Dialog.css";

const Dialog: React.FC<DialogProps> = ({
  open,
  onClose,
  children,
  title,
  titleIcon,
  size = "default",
  closeOnOverlayClick = true,
//   closeOnEsc = true,
  id,
  className = "",
  style,
}) => {
    const dialogRef = useRef<HTMLDivElement>(null);
    const dialogId = id || `dialog-${Math.random().toString(36)}`;
  // need to add scroll and focus logic 
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && closeOnOverlayClick) {
      onClose();
    }
  };

  if (!open) return null;

  let hasDialogTitle = false;
  let hasDialogBody = false;
  let hasDialogActions = false;
  let dialogTitleComponent = null;
  let dialogBodyComponent = null;
  let dialogActionsComponent = null;
  let otherComponents: React.ReactNode[] = [];

  React.Children.forEach(children, (child: React.ReactNode) => {
    if (!isValidElement(child)) {
      otherComponents.push(child);
      return;
    }

    if (child.type === DialogTitle) {
      hasDialogTitle = true;
      dialogTitleComponent = child;
    } else if (child.type === DialogBody) {
      hasDialogBody = true;
      dialogBodyComponent = child;
    } else if (child.type === DialogActions) {
      hasDialogActions = true;
      dialogActionsComponent = child;
    } else {
      otherComponents.push(child);
    }
  });

//add some error handling

  const contextValue = {
    onClose,
    size,
    titleIcon,
    dialogId,
    titleId,
    bodyId,
  };

  return createPortal(
    <DialogContext.Provider value={contextValue}>
      <DialogOverlay onClick={handleOverlayClick}>
        <div
          ref={dialogRef}
          id={dialogId}
          className={`kite-dialog kite-dialog--${size} ${className}`}
          style={style}
          // Placeholder for future ARIA attributes
          tabIndex={-1}
        >
          {hasDialogTitle ? (
            dialogTitleComponent
          ) : title ? (
            <div className="kite-dialog-header">
              <h2 id={titleId} className="kite-dialog-title">
                {titleIcon && (
                  <span className="kite-dialog-title-icon">{titleIcon}</span>
                )}
                {title}
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
          ) : null}

                  {hasDialogBody ? (
                      <div id={bodyId} className="kite-dialog-body">
                          {dialogBodyComponent}
                          </div>
          ) : (
            <div id={bodyId} className="kite-dialog-body">
              {otherComponents}
            </div>
          )}

          {hasDialogActions && dialogActionsComponent}
        </div>
      </DialogOverlay>
    </DialogContext.Provider>,
    document.body
  );
};

export default Dialog;
