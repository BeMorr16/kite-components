import { useDialogContext } from "../utils/DialogContext";
import React from "react";

export const DialogSuccessButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { data?: any }> = ({ 
    children, 
    data,
    onClick,
    ...props 
  }) => {
    const { completeDialog } = useDialogContext();
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (onClick) onClick(e);
      completeDialog('success', data);
    };
    
    return (
      <button {...props} onClick={handleClick}>
        {children}
      </button>
    );
  };
  
  export const DialogFailureButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { data?: any }> = ({ 
    children, 
    data,
    onClick,
    ...props 
  }) => {
    const { completeDialog } = useDialogContext();
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) onClick(e);
      completeDialog('failure', data);
    };
    
    return (
      <button {...props} onClick={handleClick}>
        {children}
      </button>
    );
  };
  
  export const DialogCancelButton: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { data?: any }> = ({ 
    children, 
    data,
    onClick,
    ...props 
  }) => {
    const { completeDialog } = useDialogContext();
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) onClick(e);
      completeDialog('canceled', data);
    };
    
    return (
      <button {...props} onClick={handleClick}>
        {children}
      </button>
    );
  };