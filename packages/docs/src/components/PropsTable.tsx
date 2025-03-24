import React from 'react';
import styles from './PropsTable.module.css';

export default function PropsTable({ props }) {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.propsTable}>
        <thead>
          <tr>
            <th>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.map((prop) => (
            <tr key={prop.name}>
              <td className={styles.propName}>
                {prop.name}
                {prop.required && <span className={styles.required}>*</span>}
              </td>
              <td className={styles.propType}>
                <code>{prop.type}</code>
              </td>
              <td className={styles.propDefault}>
                {prop.default === undefined ? (
                  <span className={styles.none}>—</span>
                ) : (
                  <code>{prop.default}</code>
                )}
              </td>
              <td className={styles.propDescription}>{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {props.some(prop => prop.required) && (
        <div className={styles.requiredNote}>* Required prop</div>
      )}
    </div>
  );
}