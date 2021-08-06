import React from 'react';
import {HashRouter as Router, Switch , Route} from 'react-router-dom';
import './App.css';
import Home from './pages/Home.js';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Nav from './components/Nav/index';
import Footer from './components/Footer/index';

function App() {
  return (
    <div>
      <Router>
        <Nav/>
        <Switch>
          <Route exact path='/'>
          <Home/>
          </Route>
          <Route exact path="/about">
            <About />
            </Route>
          <Route exact path="/portfolio">
            <Portfolio/>
            </Route>
            <Route exact path="/contact">
              <Contact/>
            </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

//adding this comment only if you read this message, I just hope that you are doing well!