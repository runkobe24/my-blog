import React from 'react';

import routes from './router/router';
import './App.css';
import './styles/index.less';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import ComputeRoute from './router/ComputeRoute';
import Headers from './components/Header';
function App() {
  console.log('加载了appJS');

  return (
    <Router>
      <Headers />
      <Switch>
        {routes.map((route, i) => (
          <ComputeRoute key={i} {...route} />
        ))}
      </Switch>
    </Router>
  );
}
export default App;
