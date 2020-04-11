import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Nav from './components/Nav';
import Jumbotron from './components/Jumbotron';
import Footer from './components/Footer';
import Books from './pages/Books';
import Saved from './pages/Saved';
import './App.css';


class App extends Component {
  render() {
    return (
      <Router>
        <div className = 'App'>
          <Nav />
          <Jumbotron />
          <Switch>
              <Route path = "/" exact= {true} component = {Books} /> 
              <Route path = "/saved" exact= {true} component = {Saved} />
              <Route component={Books} />
          </Switch>
          
          <Footer />
        </div>
      </Router>
    
    );
  }
}


export default App;
