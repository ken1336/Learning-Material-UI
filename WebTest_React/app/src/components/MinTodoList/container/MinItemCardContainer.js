import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../Constants";
import { useDispatch } from "react-redux";
import MinItemCardComponent from "../presentational/MinItemCardComponent";
import { removeAPICall } from "../../../store/actions";

export default function MinItemCard(props) {
  const dispatch = useDispatch();
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
  const removeEventHandler  =()=> {
    const delCard ={
      id: cardID,
      name: props.name,
      message: props.message,
      colName: props.colName
    }
    dispatch(removeAPICall(delCard));
  }
  return (
  
      <MinItemCardComponent
        id={cardID}
        name={props.name}
        message={props.message}
        remove = {removeEventHandler}

        drag = {drag}
        isDragging = {isDragging}

      ></MinItemCardComponent>
    
  );
}
