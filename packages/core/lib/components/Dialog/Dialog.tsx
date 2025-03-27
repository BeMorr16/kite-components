import React, { isValidElement, useCallback, useRef } from "react";
import { createPortal } from "react-dom";
import DialogContext from "./utils/DialogContext";
import { DialogProps, DialogResult } from "./types";
import DialogOverlay from "./components/DialogOverlay";
import DialogTitle from "./components/DialogTitle";
import DialogBody from "./components/DialogBody";
import DialogActions from "./components/DialogActions";
import "./Dialog.css";
import useKeyboardEvent from "./hooks/useKeyboardEvent";
import useLockBodyScroll from "./hooks/useLockScroll";
import getTitleElement from "./utils/getTitleElement";
import useFocusTrap from "./hooks/useFocusTrap";

const Dialog: React.FC<DialogProps> = ({
  open,
  onClose,
  children,
  onComplete,
  title,
  titleVariant,
  titleIcon,
  size = "default",
  closeOnOverlayClick = true,
  closeOnEsc = true,
  role,
  id,
  className = "",
  style,
  ariaDescribedby,
  ariaLabelledby,
}) => {
  // Ref and Ids necessary for focustrap and accessibility
  const dialogRef = useRef<HTMLDivElement>(null);
  const dialogId = id || `dialog-${Math.random().toString(36)}`;
  const titleId = `${dialogId}-title`;
  const bodyId = `${dialogId}-body`;
  const actionsId = `${dialogId}-actions`;

  // Wrapper to check for onComplete when DialogButton used
  const completeDialog = useCallback(
    (result?: DialogResult) => {
      if (onComplete) {
        onComplete(result);
      }
      onClose();
    },
    [onClose, onComplete]
  );

  // Lock scroll when open
  useLockBodyScroll(open);

  // Trap focus for key navigation
  useFocusTrap(dialogRef, { enabled: open, titleId });

  // Handles close on escape
  useKeyboardEvent(
    "Escape",
    () => {
      if (open && closeOnEsc) {
        onClose();
      }
    },
    [open, closeOnEsc, onClose]
  );

  // Handles close on overlay click
  function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget && closeOnOverlayClick) {
      onClose();
    }
  }

  if (!open) return null;

  // Analyze children to check for dialog components
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

  // Some warnings about potential issues
  if (hasDialogTitle && title) {
    console.warn(
      "Dialog received title prop and DialogTitle component. The DialogTitle component will be used."
    );
  }
  if (!title && !hasDialogTitle) {
    console.error("Dialog needs title.");
  }
  if (!children) {
    console.error("Dialog needs children.");
  }

  // Prepare context for provider
  const contextValue = {
    onClose,
    completeDialog,
    size,
    titleIcon,
    dialogId,
    titleId,
    bodyId,
    actionsId,
  };

  // Render dialog in a portal to ensure root level and correct placement
  return createPortal(
    <DialogContext.Provider value={contextValue}>
      <DialogOverlay onClick={handleOverlayClick}>
        <div
          ref={dialogRef}
          id={dialogId}
          className={`kite-dialog kite-dialog--${size} ${className}`}
          style={style}
          role={role || "dialog"}
          aria-modal="true"
          aria-labelledby={ariaLabelledby || titleId}
          aria-describedby={ariaDescribedby || bodyId}
          tabIndex={-1}
        >
          {/* Render title */}
          {hasDialogTitle ? (
            dialogTitleComponent
          ) : title ? (
            <div className="kite-dialog-header">
              {getTitleElement(
                titleVariant,
                { id: titleId, className: "kite-dialog-title" },
                <>
                  {titleIcon && (
                    <span className="kite-dialog-title-icon" aria-hidden="true">
                      {titleIcon}
                    </span>
                  )}
                  {title}
                </>
              )}
              <button
                type="button"
                className={`kite-dialog-close ${className}`}
                onClick={onClose}
                aria-label="Close dialog"
              >
                <span>&times;</span>
              </button>
            </div>
          ) : null}
          {/* Render Body */}
          {hasDialogBody ? (
            dialogBodyComponent
          ) : (
            <div id={bodyId} className="kite-dialog-body">
              {otherComponents}
            </div>
          )}
          {/* Render actions if present */}
          {hasDialogActions && dialogActionsComponent}
        </div>
      </DialogOverlay>
    </DialogContext.Provider>,
    document.body
  );
};

export default Dialog;
