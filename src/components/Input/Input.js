import React from 'react';
import PropTypes from 'prop-types';

import styles from './Input.css';

const Input = props => {
  return <input className={styles.input} {...props} />
}

Input.propTypes = {
  type: PropTypes.string.isRequired
};

Input.defaultProps = {
  type: 'text'
};

export default Input;
