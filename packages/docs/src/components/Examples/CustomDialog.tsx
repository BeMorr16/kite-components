import React, { useState } from "react";
import ReactLiveScope from "@site/src/theme/ReactLiveScope";
import "../../../../core/dist/index.css";

export default function CustomDialog() {
  const [open, setOpen] = useState(false);

  return (
    <div className="example-container">
      <button onClick={() => setOpen(true)} className="button button--primary">
        Custom Dialog
      </button>

      <ReactLiveScope.Dialog
        open={open}
        onClose={() => setOpen(false)}
        className="custom-dialog"
        size="full"
      >
        <ReactLiveScope.DialogTitle>
          <div className="custom-dialog-header">
            <span className="dialog-icon">🎨</span>
            <p style={{ margin: 0 }}>Custom Styled Dialog</p>
          </div>
        </ReactLiveScope.DialogTitle>
        <ReactLiveScope.DialogBody>
          <div className="custom-content">
            <h3>Custom Content Structure</h3>
            <p>This dialog demonstrates customization capabilities:</p>
            <ul>
              <li>Custom title with icon</li>
              <li>Full-size dialog</li>
              <li>Custom styled elements</li>
              <li>Structured content</li>
            </ul>
            <div className="content-section">
              <h4>Additional Content Section</h4>
              <p>
                You can structure dialog content however needed for your use
                case.
              </p>
            </div>
          </div>
        </ReactLiveScope.DialogBody>
        <ReactLiveScope.DialogActions justify="space-between">
          <ReactLiveScope.DialogCloseButton onClick={() => setOpen(false)}>
            Cancel
          </ReactLiveScope.DialogCloseButton>
          <div className="action-group">
            <button className="secondary-button">Save Draft</button>
            <ReactLiveScope.DialogSuccessButton onClick={() => setOpen(false)}>
              Apply Changes
            </ReactLiveScope.DialogSuccessButton>
          </div>
        </ReactLiveScope.DialogActions>
      </ReactLiveScope.Dialog>
    </div>
  );
}
