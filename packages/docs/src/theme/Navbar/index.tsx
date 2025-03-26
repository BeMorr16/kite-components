import React, { JSX } from 'react';
import OriginalNavbar from '@theme-original/Navbar';
import VersionChip from '../../components/VersionChip';

export default function NavbarWrapper(props): JSX.Element {
  return (
    <div className="navbar-wrapper">
      <OriginalNavbar {...props} />
      <div className="version-chip-container">
        <VersionChip />
      </div>
    </div>
  );
}