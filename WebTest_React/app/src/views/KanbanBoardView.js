import React, { Component, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import MinTodoListBox from "../components/MinTodoListBox";
import MinCard from "../components/MinItemCard";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";
import MinAddItemDialog from "../components/MinAddItemDialog";

const useStyles = makeStyles(theme => ({
  root: {
    margin: "10px",
    // flexGrow: 1
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    backgroundColor: "#eeeeee",
    color: theme.palette.text.secondary,
    height: "800px",
    
    // variant: "outlined",
    
  },
  button: {
    padding: theme.spacing(1)
  }
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs   >
          <DndProvider backend={Backend}>
            <Paper className={classes.paper}>
              To do
              <MinTodoListBox id="toDo" />
            </Paper>
          </DndProvider>
        </Grid>
        <Grid item xs  >
          <DndProvider backend={Backend}>
            <Paper className={classes.paper}>
              <Grid className={classes.test}>
                In progress
                
              </Grid>
              <Grid>
                
                <MinTodoListBox id="inProgress" />
              </Grid>
            </Paper>
          </DndProvider>
        </Grid>
       
        <Grid item xs  >
          <DndProvider backend={Backend}>
            <Paper className={classes.paper}>
              <Grid className={classes.test}>
                Blocked
                
              </Grid>
              <Grid>
                
                <MinTodoListBox id="blocked" />
              </Grid>
            </Paper>
          </DndProvider>
        </Grid>

        <Grid item xs  >
          <DndProvider backend={Backend}>
            <Paper className={classes.paper}>
              <Grid className={classes.test}>
                Done
                
              </Grid>
              <Grid>
                
                <MinTodoListBox id="done" />
              </Grid>
            </Paper>
          </DndProvider>
        </Grid>
      </Grid>
    </div>
  );
}
