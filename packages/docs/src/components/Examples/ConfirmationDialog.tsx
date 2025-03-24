import React, { useState } from 'react';
import ReactLiveScope from '@site/src/theme/ReactLiveScope';
import "../../../../core/dist/index.css"

export default function ConfirmationDialog() {
  const [open, setOpen] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  
  const handleOpen = () => {
    setOpen(true);
    setConfirmed(false);
  };
  
  const handleConfirm = () => {
    setConfirmed(true);
    setOpen(false);
  };
  
  return (
    <div className="example-container">
      <button 
        onClick={handleOpen}
        className="button button--primary"
      >
        Delete Item
      </button>
      
      {confirmed && (
        <div className="success-message">
          Item successfully deleted!
        </div>
      )}
      
      <ReactLiveScope.Dialog 
        open={open} 
        onClose={() => setOpen(false)}
        title="Confirm Deletion"
        role="alertdialog"
      >
        <ReactLiveScope.DialogBody>
          Are you sure you want to permanently delete this item? 
          This action cannot be undone.
        </ReactLiveScope.DialogBody>
        <ReactLiveScope.DialogActions>
          <ReactLiveScope.DialogCancelButton onClick={() => setOpen(false)}>
            Cancel
          </ReactLiveScope.DialogCancelButton>
          <ReactLiveScope.DialogSuccessButton onClick={handleConfirm}>
            Delete Permanently
          </ReactLiveScope.DialogSuccessButton>
        </ReactLiveScope.DialogActions>
      </ReactLiveScope.Dialog>
    </div>
  );
}