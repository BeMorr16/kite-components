import { useDialogContext } from "../utils/DialogContext";
import React from "react";

export const DialogSuccessButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & { data?: any }
> = ({ children, onClick, ...props }) => {
  const { completeDialog } = useDialogContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onClick) onClick(e);
    completeDialog("success");
  };

  return (
    <button {...props} type={props.type || "button"} onClick={handleClick} aria-label="Confirm action">
      {children}
    </button>
  );
};

export const DialogFailureButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & { data?: any }
> = ({ children, onClick, ...props }) => {
  const { completeDialog } = useDialogContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onClick) onClick(e);
    completeDialog("failure");
  };

  return (
    <button {...props} type={props.type || "button"} onClick={handleClick} aria-label="Reject action">
      {children}
    </button>
  );
};

export const DialogCancelButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & { data?: any }
> = ({ children, onClick, ...props }) => {
  const { onClose } = useDialogContext();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onClick) onClick(e);
    onClose();
  };

  return (
    <button {...props} type={props.type || "button"} onClick={handleClick} aria-label="Cancel dialog">
      {children}
    </button>
  );
};
