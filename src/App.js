import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import {BrowserRouter as Router, Switch , Route } from 'react-router-dom'
import Detail from './components/Detail';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
  
    <Router>
    <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/detail/:id" component={Detail} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
  
   

    
    </div>
  );
}

export default App;
