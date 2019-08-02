import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import AppNavbar from './components/layout/Appnavbar';
import  Dashboard from './components/layout/Dashboard';
import AddClinet from './components/clients/AddClient';
import EditClient from './components/clients/EditClient';
import Login from './components/clients/Login';
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
                <Route exact path="/" component ={Dashboard} />
                <Route exact path="/client/add" component ={AddClinet} />
                <Route exact path="/login" component ={Login} />
                <Route exact path="/client/edit/:id" component ={EditClient } />
                <Route exact path="/client/:id" component ={ClientDetail } />
              </Switch>
            </div>
        </div>
      </Router>
  </Provider>
  );
}

export default App;
