import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";

import { useDrop } from "react-dnd";
import { ItemTypes } from "../../Constants";


import MinTodoListComponent from "../presentational/MinTodoListComponent";
import MinAddItemDialogComponent from "../presentational/MinAddItemDialogComponent";

import {
  putAPICall,
  FetchListAPICall,
  cardCounterCall
} from "../../../store/actions";

export default function MinTodoListBox(props) {
  const [id, setId] = useState(props.id);
  const [cards, setCards] = useState([]);
  const [input, setInput] = useState({
    name: "",
    message: ""
  });
  const dispatch = useDispatch();
  const TestData = useSelector(state => state.Testing, []);
  const cardID = useSelector(state => state.Count.id, []);
  const [test, setTest] = useState(TestData);


  const addList = newCard => {
    //setCards(cards.concat(newCard));
    setCards([...cards, newCard]);
  };
  

  const [{ isOver, isOverCurrent }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop(item, monitor) {
      if (item.colName === id) return { id: null };
      let result = monitor.getItem();

      const newCard = {
        id: result.id,
        name: result.name,
        message: result.message,
        colName: props.id
      };

      addList(newCard);
      return item;
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true })
    })
  });


  const moveCard = useCallback(async movedCard => {
    setCards(
      cards.filter(v => {
        return v.id !== movedCard.id;
      })
    );
  });

  const addCard = useCallback(addedCard => {
    dispatch(cardCounterCall());

    const newCard = {
      id: cardID,
      name: addedCard.name,
      message: addedCard.message,
      colName: props.id
    };

    addList(newCard);
    dispatch(putAPICall(newCard));
  });


  // const onTestAPICallHandler = () => {
  //   dispatch(FetchListAPICall());
  // };

  return (
    // <div

    <Grid ref={drop}>
      <MinAddItemDialogComponent addCard={addCard}></MinAddItemDialogComponent>

      <MinTodoListComponent
        cards={cards}
        event={moveCard}
      ></MinTodoListComponent>
    </Grid>
  );
}
