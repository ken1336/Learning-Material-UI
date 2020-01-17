import React, { Component } from "react";
import Switch from "react-switch";
 
class MinSwitch extends Component {
  constructor() {
    super();
    this.state = { checked: false };
    this.handleChange = this.handleChange.bind(this);
  }
 
  handleChange(checked) {
    this.setState({ checked });
  }
 
  render() {
    return (
      <label>
        <br></br>
        <span>Switch with default style</span><Switch onChange={this.handleChange} checked={this.state.checked} height = {50} width = {120}/>
      </label>
    );
  }
}
export default MinSwitch;