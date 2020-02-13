import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Header from './Header';
import Home from './views/Home';
import TestComponent from './views/TestComponent';
import IndexList from './views/IndexList';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './views/KanbanBoardView'



function App() {
  return (
    
    <Router>
      <div>
        <Header/>

        <Switch>
          <Route exact path="/" component = {Home}/>
          <Route exact path="/TestComponent" component = {TestComponent}/>
          {/* <Route exact path="/IndexList" component = {IndexList}/> */}
          <Route exact path="/TodoLIst" component = {TodoList}/>
        </Switch>
      </div>


    </Router>
  );
}

export default App;
