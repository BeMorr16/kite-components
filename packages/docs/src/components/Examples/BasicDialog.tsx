import React, { useState } from 'react';
import ReactLiveScope from '@site/src/theme/ReactLiveScope';
import "../../../../core/dist/index.css"



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
        titleIcon="😎"
      >
        <ReactLiveScope.DialogBody>
          <p>
          This is a basic dialog example that demonstrates the core functionality.
          You can customize the content, title, and actions to suit your needs.
          </p>
        </ReactLiveScope.DialogBody>
        <ReactLiveScope.DialogActions>
          <ReactLiveScope.DialogCloseButton onClick={() => setOpen(false)}>
            Cancel
          </ReactLiveScope.DialogCloseButton>
          <ReactLiveScope.DialogSuccessButton onClick={() => setOpen(false)}>
            Confirm
          </ReactLiveScope.DialogSuccessButton>
        </ReactLiveScope.DialogActions>
      </ReactLiveScope.Dialog>
    </div>
  );
}