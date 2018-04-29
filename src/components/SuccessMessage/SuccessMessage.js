import React from 'react';

import styles from './SuccessMessage.css';

const SuccessMessage = ({ children }) => {
  return (
    <div className={styles.success}>
      {children}
    </div>
  );
};

export default SuccessMessage;
