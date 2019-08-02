import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {UserIsAuthenticated, UserIsNotAuthenticated} from './helpers/auth';
import AppNavbar from './components/layout/Appnavbar';
import  Dashboard from './components/layout/Dashboard';
import AddClinet from './components/clients/AddClient';
import EditClient from './components/clients/EditClient';
import Login from './components/auth/Login';
import {Provider} from 'react-redux';
import store from './store';
import ClientDetail from './components/clients/ClientDetail'

function App() {
  return (
    <Provider store = {store}>
      <Router>
        <div className="App">
          <AppNavbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component ={UserIsAuthenticated(Dashboard)} />
                <Route exact path="/client/add" component ={UserIsAuthenticated(AddClinet)} />
                <Route exact path="/login" component ={UserIsNotAuthenticated(Login)} />
                <Route exact path="/client/edit/:id" component ={UserIsAuthenticated(EditClient) } />
                <Route exact path="/client/:id" component ={UserIsAuthenticated(ClientDetail) } />
              </Switch>
            </div>
        </div>
      </Router>
  </Provider>
  );
}

export default App;
