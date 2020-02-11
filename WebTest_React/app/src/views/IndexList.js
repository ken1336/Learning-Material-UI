import React, { Component, Fragment } from "react";
import MinTable from "../component/MinTable";
import MinList from "../component/MinList";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from '@material-ui/core/styles';



class IndexList extends Component {
  constructor() {
    super();
    this.state = { 
        checked: false,
        root: {
            flexGrow: 1,
          },
          paper: {
            padding: "10px",
            marginTop: "20px",
            textAlign: 'center',
           
          }
    
  }
}
    
  render() {
    
    return (
      <div style ={this.state.root}>
        <Grid container spacing={3}>
          <Grid item xs={2}>
            abc
          </Grid>
          <Grid item xs={4}>
            <Paper style={this.state.paper}><MinList/></Paper>
            
          </Grid>
          <Grid item xs={6}>
            <Paper style={this.state.paper}><MinTable /></Paper>

            
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default IndexList;
