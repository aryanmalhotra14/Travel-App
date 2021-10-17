import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Packages from './components/pages/Packages';
import Activities from './components/pages/Activities';
import LogIn from './components/pages/LogIn';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/packages' component={Packages} />
          <Route path='/activities' component={Activities} />
          <Route path='/login' component={LogIn} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
