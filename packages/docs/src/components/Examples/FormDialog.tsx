import React, { useState } from "react";
import ReactLiveScope from '@site/src/theme/ReactLiveScope';
import "../../../../core/dist/index.css"

function ProjectFormExample() {
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [projectStatus, setProjectStatus] = useState(null); // null, 'success', 'error'
  const [projectName, setProjectName] = useState("");
  
  const [formData, setFormData] = useState({
    name: "",
    description: ""
  });
  
  const [errors, setErrors] = useState({name: null, description: null});

  const handleOpen = () => {
      setErrors({name: null, description: null});
      setFormData({ name: "", description: "" });
      setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  const validateForm = () => {
    const formErrors = {name: null, description: null};
    let isValid = true;

    if (!formData.name.trim()) {
      formErrors.name = "Project name is required";
      isValid = false;
    }
    
    if (formData.description.trim().length < 10) {
      formErrors.description = "Description must be at least 10 characters";
      isValid = false;
    }
    
    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }
    
    try {
      setIsSubmitting(true);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const success = Math.random() > 0.2;
      
      if (success) {
        setProjectName(formData.name);
        setProjectStatus('success');
        setOpen(false);
      } else {
        throw new Error("Server rejected the submission");
      }
    } catch (error) {
      setProjectStatus('error');
    } finally {
        setIsSubmitting(false);
        setOpen(false)
    }
  };

  return (
    <div className="example-container">
      <div className="project-controls">
        <button 
          className="button button--primary"
          onClick={handleOpen}
        >
          Create New Project
        </button>
        
        {projectStatus === 'success' && (
          <div className="status-message success">
            Project "{projectName}" created successfully!
          </div>
        )}
        
        {projectStatus === 'error' && (
          <div className="status-message error">
            Failed to create project. Please try again.
          </div>
        )}
      </div>
      
      <ReactLiveScope.Dialog
        open={open}
        onClose={handleClose}
        title="Create New Project"
        titleIcon="📋"
      >
        <ReactLiveScope.DialogBody>
          <div className="form-container">
            <div className="form-group">
              <label htmlFor="projectName">Project Name *</label>
              <input
                id="projectName"
                type="text"
                value={formData.name}
                onChange={(e) => handleChange('name', e.target.value)}
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && <div className="error-message">{errors.name}</div>}
            </div>
            
            <div className="form-group">
              <label htmlFor="projectDescription">Description *</label>
              <textarea
                id="projectDescription"
                rows={4}
                value={formData.description}
                onChange={(e) => handleChange('description', e.target.value)}
                aria-invalid={errors.description ? "true" : "false"}
              />
              {errors.description && (
                <div className="error-message">{errors.description}</div>
              )}
            </div>
          </div>
        </ReactLiveScope.DialogBody>
        
        <ReactLiveScope.DialogActions>
          <button 
            type="button"
            className="kite-dialog-button kite-dialog-button--close"
            onClick={handleClose}
            disabled={isSubmitting}
          >
            Cancel
          </button>
          
          <button 
            type="button"
            className="kite-dialog-button kite-dialog-button--success"
            onClick={handleSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating..." : "Create Project"}
          </button>
        </ReactLiveScope.DialogActions>
      </ReactLiveScope.Dialog>
    </div>
  );
}

export default ProjectFormExample;