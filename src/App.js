import React from 'react';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home.js';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Nav from './components/Nav/index';
import Footer from './components/Footer/index';

function App() {
  return (
    <div>
      <Router>
        <Nav/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/Portfolio" component={Portfolio}/>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;