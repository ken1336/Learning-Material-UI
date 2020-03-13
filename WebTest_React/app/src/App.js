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
import MinCalendarView from './views/MinCalendarView';



function App() {
  return (
    
    <Router>
      <div>
        <Header/>

        <Switch>
          <Route exact path="/" component = {Home}/>
          <Route exact path="/TestComponent" component = {TestComponent}/>
          <Route exact path="/MinCalendarView" component = {MinCalendarView}/>
          <Route exact path="/TodoLIst" component = {TodoList}/>
        </Switch>
      </div>


    </Router>
  );
}

export default App;
