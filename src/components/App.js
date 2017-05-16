import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './App.scss';

const App = props => (
  <div className={classNames(styles.container)}>
    <div>{props.message}</div>
    <button type="button" onClick={() => props.onClick('clicked!')}>{'click me'}</button>
  </div>);

App.propTypes = {
  message: PropTypes.string,
  onClick: PropTypes.func
};

export default App;
