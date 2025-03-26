import React from "react";
import {
  Dialog,
  DialogBody,
  DialogActions,
  DialogTitle,
  DialogCloseButton,
  DialogSuccessButton,
  DialogFailureButton,
} from "@kite/dialog";

const ReactLiveScope = {
  React,
  ...React,
  Dialog,
  DialogBody,
  DialogActions,
  DialogTitle,
  DialogCloseButton,
  DialogSuccessButton,
  DialogFailureButton,
};

export default ReactLiveScope;
