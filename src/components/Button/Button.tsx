import React from 'react';

import styles from './Button.css';

type ButtonProps = {
  handleOnClick: () => void;
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { handleOnClick, children } = props;

  return (
    <button className={styles.button} onClick={handleOnClick}>
      {children}
    </button>
  );
};

export default Button;
