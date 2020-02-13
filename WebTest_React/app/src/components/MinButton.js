import React, { Component } from "react";

import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';
class MinButton extends Component {
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
      <Box component="span" m={1}>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <Button variant="contained" color="primary">
          Hello World2
        </Button>
        asdfasdfasdf
      </Box>
    );
  }
}
export default MinButton;
