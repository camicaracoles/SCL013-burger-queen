import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { RegisterPage } from './pages/RegisterPage';
import { UsPage } from './pages/UsPage';
import { PortalMesero } from './pages/PortalMesero';

export const AppRouter = () => {

  const ruta = {}

  return (
    <Router>
      <div className='container mt-2'>
        <Switch>

          <Route path="/register" component={RegisterPage} />
          <Route path="/us" component={UsPage} />
          <Route path="/portalmesero" component={PortalMesero} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}
