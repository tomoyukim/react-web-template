import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './modules';

import AppContainer from './containers/AppContainer';
import './main.scss';

const store = createStore(reducers);

ReactDom.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>, document.getElementById('app'));
