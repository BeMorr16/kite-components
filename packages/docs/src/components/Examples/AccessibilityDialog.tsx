import React, { useState } from "react";
import ReactLiveScope from "@site/src/theme/ReactLiveScope";
import "../../../../core/dist/index.css";

export default function AccessibleDialog() {
  const [open, setOpen] = useState(false);
  return (
    <div className="example-container">
      <button onClick={() => setOpen(true)} className="button button--primary">
        Two Line
      </button>

      <ReactLiveScope.Dialog open={open} onClose={() => setOpen(false)}>
        <ReactLiveScope.DialogTitle>
          <div style={{ padding: 0 }}>
            <h4 style={{ margin: 0 }}>Header line one</h4>
            <p style={{ margin: 0 }}>second line</p>
          </div>
        </ReactLiveScope.DialogTitle>
        <ReactLiveScope.DialogBody>
          <p>Blank for demo</p>
        </ReactLiveScope.DialogBody>
        <ReactLiveScope.DialogActions>
          <ReactLiveScope.DialogCloseButton onClick={() => setOpen(false)}>
            Close
          </ReactLiveScope.DialogCloseButton>
        </ReactLiveScope.DialogActions>
      </ReactLiveScope.Dialog>
    </div>
  );
}
