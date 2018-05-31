import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import 'normalize.css';

import Board from './components/board';
import store, { history } from './store';

const MOUNT = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/" component={Board} />
      </Switch>
    </ConnectedRouter>
  </Provider>,
  MOUNT
);
