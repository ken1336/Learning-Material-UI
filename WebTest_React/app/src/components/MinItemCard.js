import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./Constants";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "10px",
    height: "100px",
    
    
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
    
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

export default function MinItemCard(props) {

  const renderCard = (id, name, message) => {

    return (
      <Card style={{
        borderRadius: "10px",
        height: "100px"
      }}>
        <CardContent>
          <Typography
            className={useStyles.title}
            color="textSecondary"
            gutterBottom
          >
            {id}
          </Typography>

          <Typography variant="body2" component="p">
            {name}
            <br />
            {message}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    );
  };

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD,id:props.id, name:props.name, message:props.message,colName:props.colName },
    end: () => {
      console.log(props.id,': drag')
      props.moveCard(props)
    },
    //end: t => console.log(props.id,' end:',t),
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: "bold",
        cursor: isDragging ? "grab" : "grab",
        margin: "5px",
        height: "100px"
      }}
    >
      {renderCard(props.id, props.name, props.message)}
    </div>
  );
}