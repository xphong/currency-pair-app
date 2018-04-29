import React from 'react';

import styles from './ErrorMessage.css';

const ErrorMessage = ({ children }) => {
  return (
    <div className={styles.error}>
      {children}
    </div>
  );
};

export default ErrorMessage;
