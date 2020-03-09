import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';
class Header extends Component{
    render(){
        return(
            <div className="header">
            <NavLink exact to="/" className="item" activeClassName="active">Home</NavLink>
            <NavLink exact to="/TestComponent" className="item" activeClassName="active">TestComponent</NavLink>
            <NavLink exact to="/Calendar" className="item" activeClassName="active">Calendar</NavLink>
            <NavLink exact to="/TodoList" className="item" activeClassName="active">TodoList</NavLink>
            </div>
        );
    }
}

export default Header;