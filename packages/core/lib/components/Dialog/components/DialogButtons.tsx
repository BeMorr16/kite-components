import { useDialogContext } from "../utils/DialogContext";
import React from "react";
import { DialogButtonProps, DialogResult } from "../types";

export const DialogButton: React.FC<DialogButtonProps> = ({
  children,
  onClick,
  className = "",
  buttonType,
  ...props
}) => {
  // Grab completiong and close func from context
  const { completeDialog, onClose } = useDialogContext();

  // Handles button click
  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (onClick) onClick(e);
    // Close dialog or complete with result
    if (buttonType === "close" || !buttonType) {
      onClose();
    } else {
      completeDialog(buttonType as DialogResult);
    }
  }

  // Get aria label based off type
  const getAriaLabel = (): string => {
    switch (buttonType) {
      case "success":
        return "Confirm action";
      case "failure":
        return "Reject action";
      case "close":
        return "Close dialog";
      default:
        return "Dialog action";
    }
  };

  // Determine button class
  const buttonClass = buttonType ? `kite-dialog-button--${buttonType}` : "";

  return (
    <button
      {...props}
      type={props.type || "button"}
      onClick={handleClick}
      aria-label={props["aria-label"] || getAriaLabel()}
      className={`kite-dialog-button ${buttonClass} ${className}`}
    >
      {children}
    </button>
  );
};

// Specialized button components for backwards compatiblity
export const DialogSuccessButton: React.FC<DialogButtonProps> = (props) => (
  <DialogButton buttonType="success" {...props} />
);

export const DialogFailureButton: React.FC<DialogButtonProps> = (props) => (
  <DialogButton buttonType="failure" {...props} />
);

export const DialogCloseButton: React.FC<DialogButtonProps> = (props) => (
  <DialogButton buttonType="close" {...props} />
);
