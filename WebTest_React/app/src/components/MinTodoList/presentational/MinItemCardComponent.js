import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";


// const useStyles = makeStyles({
//   root: {
//     minWidth: 275,
//     margin: "1px",
//     height: "150px"
//   },
//   bullet: {
//     display: "inline-block",
//     margin: "0 1px",
//     transform: "scale(0.8)"
//   },
//   title: {
//     fontSize: 14
//   },
//   pos: {
//     marginBottom: 12
//   }
// });

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
export default function MinItemCardComponent(props) {
  const classes = useStyles();
  return (

    <Paper style={{height: "100px"}}>
      <Grid >
        <div style={{ padding: "5px", fontSize: 15}}>
          {props.name?props.name:"..."}
        </div>
        <div style={{textAlign: "left", paddingLeft: "10px"}}>
          {props.message}
        </div>
        

      </Grid>
      <Grid>
      <div style={{textAlign: "right"}}>
          <IconButton size="small" aria-label="delete" onClick = {props.remove}>
            <DeleteIcon />
          </IconButton>
        </div>
        </Grid>
    </Paper>

    // <Card
    //   style={{
    //     borderRadius: "10px",
    //     height: "100px"
    //   }}
    // >

    //   <CardContent style={{padding : "4px"}}>

    //   {/* <Typography variant="body2" > */}
    //   <Typography >
    //       {props.name}
    //       <br />
    //       {props.message}
    //     </Typography>



    //   </CardContent>

    //   <Typography >      <IconButton size = "small" aria-label="delete">
    //     <DeleteIcon />
    //   </IconButton></Typography>
    // </Card>

  );


}
