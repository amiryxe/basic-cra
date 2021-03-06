import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/basic-cra/about' exact>
            <About />
          </Route>

          <Route path='/basic-cra' exact>
            <h1>Hello from CRA</h1>
            <Link to='/basic-cra/about'>About</Link>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
