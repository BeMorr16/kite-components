import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import ReactMarkdown from 'react-markdown';


export default function Changelog() {
  const [changelogData, setChangelogData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/version-info.json')
      .then(response => response.json())
      .then(data => {
        setChangelogData(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error loading changelog:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Layout title="Changelog">
        <div className="container margin-vert--lg">
          <h1>Changelog</h1>
          <p>Loading changelog data...</p>
        </div>
      </Layout>
    );
  }

  if (!changelogData) {
    return (
      <Layout title="Changelog">
        <div className="container margin-vert--lg">
          <h1>Changelog</h1>
          <p>Unable to load changelog data.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout title="Changelog">
      <div className="container margin-vert--lg">
        <div className="changelog-header">
          <h1>Changelog</h1>
          <div className="version-info">
            <span className="current-version">v{changelogData.currentVersion}</span>
            <span className="release-date">
              {new Date(changelogData.releaseDate).toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className="changelog-content">
          <ReactMarkdown>{changelogData.changelog}</ReactMarkdown>
        </div>
      </div>
    </Layout>
  );
}