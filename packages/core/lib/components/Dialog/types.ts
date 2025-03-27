export type DialogSize = "default" | "full";
// for onComplete
export type DialogResult = "success" | "failure";
// Main Dialog props
export interface DialogProps {
  //Required
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;

  // Optional completion handler
  onComplete?: (result?: DialogResult) => void;
  //Optionals
  title?: React.ReactNode;
  titleVariant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  titleIcon?: React.ReactNode;
  size?: DialogSize;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;

  id?: string;
  className?: string;
  style?: React.CSSProperties;
  role?: "dialog" | "alertdialog";
  ariaDescribedby?: string;
  ariaLabelledby?: string;
}

export interface DialogTitleProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}

export interface DialogBodyProps {
  children: React.ReactNode;
  className?: string;
}

export interface DialogActionsProps {
  children: React.ReactNode;
  justify?: "start" | "end" | "center" | "space-between";
  className?: string;
}

export interface DialogOverlayProps {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  className?: string;
}

//Anything needed at the component level.
export interface DialogContextType {
  onClose: () => void;
  size: "default" | "full";
  completeDialog: (result?: DialogResult) => void;
  titleIcon?: React.ReactNode;

  //Accessibility IDs
  dialogId: string;
  titleId: string;
  bodyId: string;
  actionsId: string;
}

type DialogButtonType = "success" | "failure" | "close";

export interface DialogButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: DialogButtonType;
}
