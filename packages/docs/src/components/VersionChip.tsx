import React, { useState, useEffect, JSX } from "react";
import Link from "@docusaurus/Link";

export default function VersionChip(): JSX.Element | null {
  const [version, setVersion] = useState(null);

  useEffect(() => {
    fetch("/version-info.json")
      .then((response) => response.json())
      .then((data) => {
        setVersion(data.currentVersion);
      })
      .catch((error) => console.error("Error loading version info:", error));
  }, []);

  if (!version) return null;

  return (
    <div className="version-chip-wrapper">
      <span className="version-message">Not working? Check your version:</span>
      <Link to="/changelog" className="version-chip">
        v{version}
      </Link>
    </div>
  );
}
