import React from 'react';
import BasicDialog from './BasicDialog';
import ConfirmationDialog from './ConfirmationDialog';
import CustomDialog from './CustomDialog';
import "../../../../core/dist/index.css"

export default function DialogExamplesGallery() {
  return (
    <div className="examples-gallery">
      <div className="example-card">
        <h3>Basic Dialog</h3>
        <p>A simple dialog with title, content, and action buttons.</p>
        <BasicDialog />
      </div>
      
      <div className="example-card">
        <h3>Custom Styled Dialog</h3>
        <p>Demonstrates customization capabilities for complex use cases.</p>
        <CustomDialog />
      </div>
    </div>
  );
}