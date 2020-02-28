import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../Constants";

import MinItemCardComponent from "../presentational/MinItemCardComponent";

export default function MinItemCard(props) {
  const cardID = props.id;
  const [{ isDragging }, drag] = useDrag({
    item: {
      type: ItemTypes.CARD,
      id: cardID,
      name: props.name,
      message: props.message,
      colName: props.colName
    },
    begin: () => {},
 
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
      <MinItemCardComponent
        id={cardID}
        name={props.name}
        message={props.message}
      ></MinItemCardComponent>
    </div>
  );
}
