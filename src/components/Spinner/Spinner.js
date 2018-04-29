import React from 'react';
import PropTypes from 'prop-types';

import styles from './Spinner.css';

export const Spinner = ({ type }) => {
  const loadingClassName = styles[`loading${type}`];
  return <div className={loadingClassName}>Loading&#8230;</div>;
};

Spinner.propTypes = {
  type: PropTypes.string.isRequired
};

Spinner.defaultProps = {
  type: 'Full'
};


export default Spinner;
