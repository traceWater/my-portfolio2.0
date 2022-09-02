import { HashRouter, Switch, Route } from 'react-router-dom';
import store from './store/index.js';

import { Provider } from 'react-redux';

import React from 'react';
import Home from './pages/Home';
import Match from './pages/Match';
import Rules from './components/Rules';

import GlobalStyle from './styles/globals';

const App = () => {
  return(<>
    <GlobalStyle />
    <HashRouter>
      <Provider store={ store }>
        <Switch>
          <Route path="/" exact={ true } component={ Home } />
          <Route path="/match" component={ Match } />
          <Route path="/rules" component={Rules } />
        </Switch>
      </Provider>
    </HashRouter>
    </>
  );
}

export default App;

