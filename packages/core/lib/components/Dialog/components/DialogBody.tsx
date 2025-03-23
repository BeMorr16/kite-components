import React from "react";
import { DialogBodyProps } from "../types";

const DialogBody: React.FC<DialogBodyProps> = ({
  children,
  className = "",
}) => {
  return <div className={`kite-dialog-body ${className}`}>{children}</div>;
};

export default DialogBody;
