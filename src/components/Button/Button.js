import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.css';

const Button = props => {
  const { handleOnClick, children } = props;

  return (
    <button className={styles.button} onClick={handleOnClick}>
      {children}
    </button>
  );
};

Button.propTypes = {
  handleOnClick: PropTypes.func
};

export default Button;
