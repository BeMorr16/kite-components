import { describe, test, expect, jest } from '@jest/globals';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dialog from '../Dialog/Dialog';
import {DialogButton, DialogSuccessButton, DialogFailureButton, DialogCloseButton} from '../Dialog/components/DialogButtons'

describe('DialogButtons', () => {
  test('DialogButton should trigger onClick and close dialog', () => {
    const handleClick = jest.fn();
    const handleClose = jest.fn();
    
    render(
      <Dialog open={true} onClose={handleClose} title="Test">
        <DialogButton onClick={handleClick}>Button</DialogButton>
      </Dialog>
    );
    
    fireEvent.click(screen.getByText('Button'));
    expect(handleClick).toHaveBeenCalled();
    expect(handleClose).toHaveBeenCalled();
  });
  
  test('DialogSuccessButton should trigger onComplete with success', () => {
    const handleComplete = jest.fn();
    const handleClose = jest.fn();
    
    render(
      <Dialog open={true} onClose={handleClose} onComplete={handleComplete} title="Test">
        <DialogSuccessButton>Success</DialogSuccessButton>
      </Dialog>
    );
    
    fireEvent.click(screen.getByText('Success'));
    expect(handleComplete).toHaveBeenCalledWith('success');
    expect(handleClose).toHaveBeenCalled();
  });
  
  test('DialogFailureButton should trigger onComplete with failure', () => {
    const handleComplete = jest.fn();
    const handleClose = jest.fn();
    
    render(
      <Dialog open={true} onClose={handleClose} onComplete={handleComplete} title="Test">
        <DialogFailureButton>Failure</DialogFailureButton>
      </Dialog>
    );
    
    fireEvent.click(screen.getByText('Failure'));
    expect(handleComplete).toHaveBeenCalledWith('failure');
    expect(handleClose).toHaveBeenCalled();
  });
  
  test('DialogCloseButton should close dialog', () => {
    const handleClose = jest.fn();
    
    render(
      <Dialog open={true} onClose={handleClose} title="Test">
        <DialogCloseButton>Close</DialogCloseButton>
      </Dialog>
    );
    
    fireEvent.click(screen.getByText('Close'));
    expect(handleClose).toHaveBeenCalled();
  });
});