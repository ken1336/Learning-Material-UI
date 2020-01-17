import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Header';
import Home from './routes/Home';
import TestComponent from './routes/TestComponent';
import IndexList from './routes/IndexList';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    
    <Router>
      <div>
        <Header/>

        <Switch>
          <Route exact path="/" component = {Home}/>
          <Route exact path="/TestComponent" component = {TestComponent}/>
          <Route exact path="/IndexList" component = {IndexList}/>
        </Switch>
      </div>


    </Router>
  );
}

export default App;
