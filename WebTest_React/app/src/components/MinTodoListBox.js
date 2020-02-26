import React, { useRef, useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MinCard from './MinItemCard'
import MinAddItemDialog from "../components/MinAddItemDialog";
import { useDrop } from 'react-dnd'
import { ItemTypes } from './Constants'
import { Button, BottomNavigationAction } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import { testAPICall,putAPICall, FetchListAPICall,cardCounterCall } from '../store/actions/index';

export default function MinTodoListBox(props) {

  const [id, setId] = useState(props.id);
  const [cards, setCards] = useState([
    
  ]);
  const [input, setInput] = useState({
    name: '',
    message: '',
  });

  const onInputNameChange = e => {
    setInput({
      name: e.target.value
    }

    )
  }
  const onInputMessageChange = e => {

    setInput({
      message: e.target.value
    }

    )
  }
  
  const addList = (newCard) => {
    //setCards(cards.concat(newCard));
    setCards([...cards,newCard])
    
  }
  const onCreate = () => {
 

  };

  const [{ isOver, isOverCurrent }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop(item, monitor) {

      
        
      const didDrop = monitor.didDrop();

      let result = monitor.getItem();
      
      const newCard = {
        id: result.id,
        name: result.name,
        message: result.message,
        colName: props.id,
      };
      console.log(id+" will add ", newCard)
      addList(newCard);
      
     
      return item;
      
    },

    collect: monitor => ({
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  })

  const moveCard = useCallback(
    async (movedCard) => {
      
      const del = cards.findIndex(v => v.id === movedCard.id);
      console.log(id,' delete:',movedCard, del)
      
       
      setCards(cards.splice(del, 1));
      console.log(id,' list:',cards)
      //
      
      
      // await cards.map((v, i) => v.id = i + 1)
    },
    
  )

  const addCard = useCallback(
    (addedCard) => {
      dispatch(cardCounterCall())
      
      const newCard = {
        id: cardID,
        name: addedCard.name,
        message: addedCard.message,
        colName: props.id,

      };
      addList(newCard);
      dispatch(putAPICall(newCard));
      
    }
  )
  const dispatch = useDispatch();
  const TestData = useSelector(state => state.Testing, []);
  const cardID = useSelector(state => state.Count.id, []);
  const [test, setTest] = useState(TestData);
  


  const onTestAPICallHandler = ()  => {
    
    dispatch(FetchListAPICall());
    
  }


  return (
    // <div

    <Grid ref={drop} style={{}}>
      
      <Grid>
        <Button onClick = {onTestAPICallHandler}>TestAPICall</Button>
        {TestData.data}
      </Grid>
      <Grid style={{
        display: "inline",
        textAlign: "right",

      }}>
        <MinAddItemDialog addCard={addCard}>Add Card</MinAddItemDialog>
      </Grid>
      <GridList cols={1} style={{
        }} >
          <GridListTile style={{
            height: "100%",
            minHeight: "700px",
            maxHeight: "700px",
            overflow: 'scroll'
          }}>
            {cards.map(v => (
              <MinCard
                key={v.id}
                id={v.id}
                name={v.name}
                message={v.message}
                colName={v.colName}
                moveCard={moveCard}
              ></MinCard>
            ))}
          </GridListTile>
        
      </GridList >
    </Grid>
  );
}