import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";




import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
    
    <div>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Expansion Panel 1</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
        </div>
  );
      
      
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
  
}
