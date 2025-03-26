export type DialogSize = "default" | "full";

export type DialogResult = "success" | "failure";

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;

  onComplete?: (result?: DialogResult) => void;

  // Optionals
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

//Anything needed at the component level. Gonne have to alter for completing
export interface DialogContextType {
  onClose: () => void;
  size: "default" | "full";
  completeDialog: (result?: DialogResult) => void;
  titleIcon?: React.ReactNode;

  dialogId: string;
  titleId: string;
  bodyId: string;
  actionsId: string;
}

type DialogButtonType = "success" | "failure" | "close";

export interface DialogButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: DialogButtonType;
}