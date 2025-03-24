import React from 'react';
// Import your dialog components
import { 
  Dialog, 
  DialogBody, 
  DialogActions, 
  DialogTitle, 
  DialogCancelButton, 
  DialogSuccessButton,
    DialogFailureButton,
  useDialogContext
} from "@site/../core/dist";

// Add react-live imports you need here
const ReactLiveScope = {
  React,
  ...React,
  Dialog,
  DialogBody,
  DialogActions,
  DialogTitle,
  DialogCancelButton,
  DialogSuccessButton,
    DialogFailureButton,
  useDialogContext
};

export default ReactLiveScope;