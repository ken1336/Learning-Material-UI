import React, { Component, Fragment } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MinTodoListBox from '../component/MinTodoListBox'
import MinCard from '../component/MinCard'

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
          <Paper className={classes.paper}>To do
            <Grid item xs >
              <MinCard />

            </Grid>
            <Grid item xs >
              <MinCard />
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>In progress
            <MinTodoListBox/>
          </Paper>
        </Grid>
        <Grid item xs>
          <Paper className={classes.paper}>Done</Paper>
        </Grid>
      </Grid>

    </div>
  );
}
