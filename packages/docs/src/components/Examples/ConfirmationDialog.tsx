import React, { useState } from 'react';
import ReactLiveScope from '@site/src/theme/ReactLiveScope';
import "../../../../core/dist/index.css"

export default function ConfirmationDialog() {
  const [open, setOpen] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const [rejected, setRejected] = useState(false);
  
  const handleOpen = () => {
    setOpen(true);
    setConfirmed(false);
  };


  const handleCompletion = (result) => {
    if (result === "success") {
      setTimeout(() => {
        setConfirmed(true);
      }, 1000);
    } else if (result === "failure") {
      setTimeout(() => {
        setRejected(true);
      }, 1000);
    }
    setTimeout(() => {
      setRejected(false);
      setConfirmed(false)
    }, 2000);
  }
  
  return (
    <div className="example-container">
      <button 
        onClick={handleOpen}
        className="button button--primary"
      >
        Delete Item
      </button>
      
      {confirmed && (
        <div className="status-message success">
          Item successfully deleted!
        </div>
      )}
      {rejected && (
        <div className="status-message error">
          Canceled
        </div>
      )}
      
      <ReactLiveScope.Dialog 
        open={open} 
        onClose={() => setOpen(false)}
        title="Confirm Deletion"
        role="alertdialog"
        onComplete={handleCompletion}
      >
        <ReactLiveScope.DialogBody>
          Are you sure you want to permanently delete this item? 
          This action cannot be undone.
        </ReactLiveScope.DialogBody>
        <ReactLiveScope.DialogActions>
          <ReactLiveScope.DialogFailureButton>
            Cancel
          </ReactLiveScope.DialogFailureButton>
          <ReactLiveScope.DialogSuccessButton>
            Confirm
          </ReactLiveScope.DialogSuccessButton>
        </ReactLiveScope.DialogActions>
      </ReactLiveScope.Dialog>
    </div>
  );
}