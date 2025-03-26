import { describe, test, expect, jest } from '@jest/globals';
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Dialog from '../Dialog/Dialog';

describe('Dialog', () => {

  test('should not render when closed', () => {
    render(
      <Dialog open={false} onClose={() => {}} title="Test Dialog">
        <div>Dialog content</div>
      </Dialog>
    );
    expect(screen.queryByRole('dialog')).not.toBeTruthy();
  });

  test('should render when open', () => {
    render(
      <Dialog open={true} onClose={() => {}} title="Test Dialog">
        <div>Dialog content</div>
      </Dialog>
    );
    const dialog = document.querySelector('[role="dialog"]')
    expect(dialog).toBeTruthy();
    expect(screen.getByText('Test Dialog')).toBeTruthy();
    expect(screen.getByText('Dialog content')).toBeTruthy();
  });

  test('should call onClose when close button is clicked', () => {
    const handleClose = jest.fn();
    
    render(
      <Dialog open={true} onClose={handleClose} title="Test Dialog">
        <div>Dialog content</div>
      </Dialog>
    );
    
    const closeButton = screen.getByLabelText('Close dialog');
    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalledTimes(1);
  });
});