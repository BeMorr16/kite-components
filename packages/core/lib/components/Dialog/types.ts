export type DialogSize = "default" | "full";
export type DialogCompletion = "success" | "failure";

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;

  // Optional Props
  title?: React.ReactNode;
  titleIcon?: React.ReactNode;
  size?: DialogSize;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;

  id?: string;
  className?: string;
  style?: React.CSSProperties;
  //add aria description
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

export interface DialogContextType {
  onClose: () => void;
  size: "default" | "full";

  titleIcon?: React.ReactNode;

  dialogId: string;
  titleId: string;
  bodyId: string;
}
