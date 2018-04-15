import React from 'react';

import styles from './ErrorMessage.css';

const ErrorMessage = props => {
  return (
    <div className={styles.error}>
      {props.children}
    </div>
  );
};

export default ErrorMessage;
