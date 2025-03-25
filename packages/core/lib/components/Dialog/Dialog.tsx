import React, { isValidElement, useCallback, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import DialogContext from "./utils/DialogContext";
import { DialogProps, DialogResult } from "./types";
import DialogOverlay from "./components/DialogOverlay";
import DialogTitle from "./components/DialogTitle";
import DialogBody from "./components/DialogBody";
import DialogActions from "./components/DialogActions";
import "./Dialog.css";
import { getFocusableElements } from "./utils/getFocusableElements";
import { useKeyboardEvent } from "./hooks/useKeyboardEvent";
import { useLockBodyScroll } from "./hooks/useLockScroll";
import getTitleElement from "./utils/getTitleElement";

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
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const dialogId = id || `dialog-${Math.random().toString(36)}`;
  const titleId = `${dialogId}-title`;
  const bodyId = `${dialogId}-body`;
  const actionsId = `${dialogId}-actions`;
  const completeDialog = useCallback(
    (result?: DialogResult) => {
      if (onComplete) {
        onComplete(result);
      }
      onClose();
    },
    [onClose, onComplete]
  );

  useLockBodyScroll(open);

  useKeyboardEvent(
    "Escape",
    () => {
      if (open && closeOnEsc) {
        onClose();
      }
    },
    [open, closeOnEsc, onClose]
  );

  const previousActiveElement = useRef<HTMLElement | null>(null);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget && closeOnOverlayClick) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent | KeyboardEvent) => {
    if (!dialogRef.current) return;

    if (e.key === "Tab") {
      const focusableElements = getFocusableElements(dialogRef.current);
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }

    if (dialogRef.current && (e.key === "ArrowDown" || e.key === "ArrowUp")) {
      const elements = Array.from(
        dialogRef.current.querySelectorAll(
          'h1, h2, h3, h4, h5, h6, p, li, span[role="text"], div[role="text"]'
        )
      ) as HTMLElement[];

      const visibleElements = elements.filter((el) => {
        const style = window.getComputedStyle(el);
        return (
          style.display !== "none" &&
          style.visibility !== "hidden" &&
          el.textContent?.trim()
        );
      });

      if (visibleElements.length > 0) {
        const currentIndex = visibleElements.findIndex(
          (el) => el === document.activeElement
        );
        let nextIndex;

        if (e.key === "ArrowDown") {
          nextIndex =
            currentIndex < 0 ? 0 : (currentIndex + 1) % visibleElements.length;
        } else {
          nextIndex =
            currentIndex < 0
              ? visibleElements.length - 1
              : (currentIndex - 1 + visibleElements.length) %
                visibleElements.length;
        }

        visibleElements[nextIndex].setAttribute("tabindex", "-1");
        visibleElements[nextIndex].focus();

        e.preventDefault();
      }
    }
  };

  useEffect(() => {
    if (open && dialogRef.current) {
      previousActiveElement.current = document.activeElement as HTMLElement;

      const titleElement = document.getElementById(titleId);
      if (titleElement) {
        titleElement.setAttribute("tabindex", "-1");
        titleElement.focus();
      } else {
        const focusableElements = getFocusableElements(dialogRef.current);
        if (focusableElements.length > 0) {
          focusableElements[0].focus();
        } else {
          dialogRef.current.focus();
        }
      }

      dialogRef.current.addEventListener("keydown", handleKeyDown);
      return () => {
        dialogRef.current?.removeEventListener("keydown", handleKeyDown);
      };
    }
    if (!open && previousActiveElement.current) {
      previousActiveElement.current.focus();
    }
    return () => {};
  }, [open]);

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
          aria-labelledby={titleId}
          aria-describedby={bodyId}
          tabIndex={-1}
        >
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

          {hasDialogBody ? (
            dialogBodyComponent
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
