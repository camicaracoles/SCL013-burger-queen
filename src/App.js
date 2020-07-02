import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
 NavLink
} from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { RegisterPage} from './pages/RegisterPage';
import { UsPage } from './pages/UsPage';
import { ContactPage } from './pages/ContactPage';

export const AppRouter = () => {
  return (
    <Router>
      <div className='container mt-2'>
        <div className='btn-group'>
              <Link to="/" className='btn btn-dark'>Inicio</Link>
              <Link to="/register" className='btn btn-dark'>Registrate</Link>
              <Link to="/us" className='btn btn-dark'>Nosotros</Link>
              <NavLink to="/contact" className='btn btn-dark' activeClassName='active'>Contacto</NavLink>

        </div>

        <Switch>

          <Route path="/register" component = { RegisterPage }/>
          <Route path="/us" component = { UsPage }/>
          <Route path="/contact" component = { ContactPage }/>
          <Route path="/" component = { HomePage }/>
        </Switch>
      </div>
    </Router>
  );
}
