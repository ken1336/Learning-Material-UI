import React, { Component, Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MinTodoListBox from '../component/MinTodoListBox'
import MinCard from '../component/MinItemCard'
import { DndProvider } from 'react-dnd'
import Backend from 'react-dnd-html5-backend'


const useStyles = makeStyles(theme => ({
  root: {
    margin: '10px',
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    backgroundColor: '#eeeeee',
    color: theme.palette.text.secondary,
    height: '800px',
    width: '600px',
    variant: 'outlined',
  },
}));

export default function Home() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <Grid container spacing={3}>
        <Grid item xs>
        <DndProvider backend={Backend}>
          <Paper className={classes.paper}>To do
          
          <MinTodoListBox id="toDo"/>
          
            
          </Paper>
          </DndProvider>
        </Grid>
        <Grid item xs>
        <DndProvider backend={Backend}>
          <Paper className={classes.paper}>In progress
          
          <MinTodoListBox id="inProgress"/>
          
            
          </Paper>
          </DndProvider>
        </Grid>
        <Grid item xs>
          {/* <Paper className={classes.paper}>Done</Paper> */}
        </Grid>
      </Grid>
      
    </div>
  );
}
