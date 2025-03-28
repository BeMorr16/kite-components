# Kite Components

This repository contains an accessible Dialog component along with documentation and testing.

## Getting Started

### Clone the repository

```bash
git clone https://github.com/BeMorr16/kite-components.git
cd kite-components
```
or

```bash
git clone git@github.com:BeMorr16/kite-components.git
cd kite-components
```

### Install dependencies

```bash
pnpm install
```

## Project Structure

The project is structured as a monorepo using pnpm workspaces:

- `packages/core`: The component library
- `packages/docs`: Documentation site built with Docusaurus

## Running the packages

### Core Component Library

To build the component library:

```bash
pnpm --filter @kite/dialog build
```

To run tests:

```bash
pnpm --filter @kite/dialog test
```

To start Storybook (component development environment):
See Documentation site for usage examples.

```bash
pnpm --filter @kite/dialog storybook
```

### Documentation Site

To start the documentation development server:

```bash
pnpm --filter docs start
```

To build the documentation site:

```bash
pnpm --filter docs build
```

Then serve:

```bash
pnpm --filter docs serve
```

## Using the component in your project once published to library

### Usage

```jsx
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogBody, 
  DialogActions,
  DialogSuccessButton,
  DialogCloseButton
} from '@kite/dialog';
import '@kite/dialog/dist/index.css'; // Import styles (will change)

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Dialog</button>
      
      <Dialog 
        open={isOpen} 
        onClose={() => setIsOpen(false)}
        title="Example Dialog"
      >
        <DialogBody>
          <p>This is a basic dialog example that demonstrates the core
            functionality. You can customize the content, title, and actions to
            suit your needs.</p>
        </DialogBody>
        <DialogActions>
          <DialogCloseButton>
            Cancel
          </DialogCloseButton>
          <DialogSuccessButton>
            Confirm
          </DialogSuccessButton>
        </DialogActions>
      </Dialog>
    </div>
  );
}
```

## Features

- Fully accessible (WCAG AA compliant)
- Keyboard navigation support
- Focus trap and management
- Responsive design
- Customizable styling
- Various button types with result handling (can use personal buttons)
