import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";

import styles from "./index.module.css";
import BasicDialog from "../components/Examples/BasicDialog";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Accessible and responsive dialog components for React"
    >
      <HomepageHeader />
      <main>
        <div className="container">
          <div className={styles.demoSection}>
            <div className={styles.demoContent}>
              <h2>Accessible Dialog Components</h2>
              <p>
                The Kite Dialog component library provides highly accessible,
                responsive modal dialog for React applications. Built with both
                developers and users in mind.
              </p>
              <ul className={styles.featureList}>
                <li>Fully accessible with ARIA support</li>
                <li>Responsive design for all screen sizes</li>
                <li>Flexible API for various use cases</li>
                <li>Customizable appearance</li>
                <li>Keyboard navigation support</li>
              </ul>
              <Link
                className="button button--secondary button--md"
                to="/docs/technical/getting-started"
                style={{ maxWidth: "50%", marginLeft: "25%" }}
              >
                Get Started with Dialog
              </Link>
            </div>
            <div className={styles.demoExample}>
              <BasicDialog />
            </div>
          </div>

          <div className={styles.userSections}>
            <div className={styles.userSection}>
              <h3>For Developers</h3>
              <p>
                Technical documentation to implement Kite Dialog components in
                your application.
              </p>
              <Link
                className="button button--outline button--md"
                to="/docs/technical/getting-started"
              >
                Technical Docs
              </Link>
            </div>
            <div className={styles.userSection}>
              <h3>For Product Managers</h3>
              <p>
                Non-technical guides to understand when and how to use dialog
                components.
              </p>
              <Link
                className="button button--outline button--md"
                to="/docs/non-technical/overview"
              >
                Non-Technical Guide
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
