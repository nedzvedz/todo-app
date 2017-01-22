import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { todoApp } from './reducers/todo-app';
import ReduxThunk from 'redux-thunk';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

import AppContainer from './containers/app';
import './index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(todoApp, composeEnhancers(
    applyMiddleware(ReduxThunk)
));
injectTapEventPlugin();

ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <AppContainer />
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
