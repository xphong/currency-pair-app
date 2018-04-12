import React from 'react';
import ReactDOM from 'react-dom';

import styles from './index.css';

const App = () => {
  return <div className={styles.container}>Hello World</div>;
};

ReactDOM.render(<App />, document.getElementById('root'));
