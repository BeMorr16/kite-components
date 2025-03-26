import { describe, test, expect } from '@jest/globals';
import React from 'react';
import { render } from '@testing-library/react';
import Dialog from '../Dialog/Dialog';
import DialogActions from '../Dialog/components/DialogActions';

describe('DialogActions', () => {
  test('should render with default justify end', () => {
    render(
      <Dialog open={true} onClose={() => {}} title="Test">
        <DialogActions>
          <button>Action</button>
        </DialogActions>
      </Dialog>
    );
    
    const actions = document.querySelector('.kite-dialog-actions');
    expect(actions?.classList.contains('kite-dialog-actions--end')).toBe(true);
  });
  
  test('should apply justify prop', () => {
    render(
      <Dialog open={true} onClose={() => {}} title="Test">
        <DialogActions justify="center">
          <button>Action</button>
        </DialogActions>
      </Dialog>
    );
    
    const actions = document.querySelector('.kite-dialog-actions');
    expect(actions?.classList.contains('kite-dialog-actions--center')).toBe(true);
  });
});