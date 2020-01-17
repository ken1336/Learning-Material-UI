import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';
class Header extends Component{
    render(){
        return(
            <div className="header">
            <NavLink exact to="/" className="item" activeClassName="active">Home</NavLink>
            <NavLink exact to="/TestComponent" className="item" activeClassName="active">TestComponent</NavLink>
            <NavLink exact to="/IndexList" className="item" activeClassName="active">IndexList</NavLink>
            <NavLink exact to="/a" className="item" activeClassName="active">.......</NavLink>
            </div>
        );
    }
}

export default Header;