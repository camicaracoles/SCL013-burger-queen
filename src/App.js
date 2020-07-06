import React from 'react';
import {BrowserRouter as Router,Switch,Route,} from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { RegisterPage } from './pages/RegisterPage';
import { Cocina } from './pages/Cocina';
import { PortalMesero } from './pages/PortalMesero';
import { PortalAdministrador} from './pages/PortalAdministrador';


export const AppRouter = () => {

  return (
    <Router>
      <div className='container mt-2'>
        <Switch>

          <Route path='/register' component={RegisterPage} />
          <Route path="/cocina" component={Cocina} />
          <Route path="/portalmesero" component={PortalMesero} />
          <Route path="/" component={HomePage} />
          <Route path='/administrador' component={PortalAdministrador} />
        </Switch>
      </div>
    </Router>
  );
}
