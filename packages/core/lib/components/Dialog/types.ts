export type DialogSize = "default" | "full";

export type DialogResult = "success" | "failure" | "canceled";

export interface DialogProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;

  onComplete?: (result?: DialogResult, data?: any) => void
    
  // Optionals
  title?: React.ReactNode;
  titleIcon?: React.ReactNode;
  size?: DialogSize;
  closeOnOverlayClick?: boolean;
  closeOnEsc?: boolean;

  id?: string;
  className?: string;
  style?: React.CSSProperties;
  //add aria description one?
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
    completeDialog: (result?: DialogResult, data?: any) => void;
  titleIcon?: React.ReactNode;

  dialogId: string; 
  titleId: string;
  bodyId: string;
}
