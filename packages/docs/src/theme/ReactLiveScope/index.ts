import React from 'react';
import { 
  Dialog, 
  DialogBody, 
  DialogActions, 
  DialogTitle, 
  DialogCancelButton, 
  DialogSuccessButton,
    DialogFailureButton,
} from "@site/../core/dist";

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
};

export default ReactLiveScope;