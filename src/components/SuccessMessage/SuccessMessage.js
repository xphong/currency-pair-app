import React from 'react';

import styles from './SuccessMessage.css';

const SuccessMessage = props => {
  return (
    <div className={styles.success}>
      {props.children}
    </div>
  );
};

export default SuccessMessage;
