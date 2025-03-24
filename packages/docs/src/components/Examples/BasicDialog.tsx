import React, { useState } from 'react';
import ReactLiveScope from '@site/src/theme/ReactLiveScope';
import "../../../../core/dist/index.css"
import { useDialogContext } from '../../../../core/dist';



export default function BasicDialog() {
    const [open, setOpen] = useState(false);
  return (
    <div>
      <button 
        onClick={() => setOpen(true)}
        className="button button--primary"
      >
        Open Dialog
      </button>
      
      <ReactLiveScope.Dialog 
        open={open} 
        onClose={() => setOpen(false)}
        title="Example Dialog"
      >
        <ReactLiveScope.DialogBody>
          This is a basic dialog example that demonstrates the core functionality.
          You can customize the content, title, and actions to suit your needs.
        </ReactLiveScope.DialogBody>
        <ReactLiveScope.DialogActions>
          <ReactLiveScope.DialogCancelButton onClick={() => setOpen(false)}>
            Cancel
          </ReactLiveScope.DialogCancelButton>
          <ReactLiveScope.DialogSuccessButton onClick={() => setOpen(false)}>
            Confirm
          </ReactLiveScope.DialogSuccessButton>
        </ReactLiveScope.DialogActions>
      </ReactLiveScope.Dialog>
    </div>
  );
}