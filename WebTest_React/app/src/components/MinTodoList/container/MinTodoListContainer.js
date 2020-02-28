import React, { useState, useCallback,useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../Constants";


import MinTodoListComponent from "../presentational/MinTodoListComponent";
import MinAddItemDialogComponent from "../presentational/MinAddItemDialogComponent";

import {
  putAPICall,
  FetchListAPICall,
  moveAPICall
} from "../../../store/actions";

export default function MinTodoListBox(props) {
  const [id, setId] = useState(props.id);
  const [cards, setCards] = useState([]);
  const dispatch = useDispatch();
  const cardData = useSelector(state => state.CardData, []);



  useEffect(()=>{
    
    dispatch(FetchListAPICall());
    
  },[]);

  // const addList = newCard => {
  //   setCards([...cards, newCard]);
    
  // };
  

  const [{ isOver, isOverCurrent }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop(item, monitor) {
     
      if (item.colName === id) {
        return { id: null };
      }
      let result = monitor.getItem();
      
      const moveCard = {
        id: result.id,
        name: result.name,
        message: result.message,
        colName: props.id
      };
      
      dispatch(moveAPICall(moveCard));
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
        return v.id !== movedCard.id ;
      })
    );
  });

  const addCard = useCallback(addedCard => {

    const newCard = {
      id:null,
      name: addedCard.name,
      message: addedCard.message,
      colName: props.id
    };
    dispatch(putAPICall(newCard));
    
    
  });
  useEffect(v=>{

    
    
    if(cardData.data)
    {
      const newCards = cardData.data.filter(v=>{
        
        return v.colName === id
      });
      setCards(newCards);
      console.log(id,"cards: ",cards,"cardData: ",cardData.data);
      
    }
  
    //addList(cardData);
  },[cardData])


  const onTestAPICallHandler = () => {
    //dispatch(FetchListAPICall());
    dispatch(FetchListAPICall());
    console.log(cardData);
    //setCards(cardData.data.filter(v=>v.colName ===id))
    //console.log(cards)
  };

  return (
    // <div

    <Grid ref={drop}>
      <Button onClick ={onTestAPICallHandler} >button</Button>
      <MinAddItemDialogComponent addCard={addCard}></MinAddItemDialogComponent>

      <MinTodoListComponent
        cards={cards}
        event={moveCard}
      ></MinTodoListComponent>
    </Grid>
  );
}
