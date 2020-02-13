import React, { useRef, useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MinCard from './MinItemCard'
import MinAddItemDialog from "../components/MinAddItemDialog";
import { useDrop } from 'react-dnd'
import { ItemTypes } from './Constants'
import { Button } from '@material-ui/core';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

export default function MinTodoListBox(props) {

  const [id, setId] = useState(props.id);
  const [cards, setCards] = useState([
    {
      id: 1,
      name: 'name',
      message: 'testesttest',
      colName: props.id,
    }
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
  const nextId = useRef(2);
  const addList = (newCard) => {
    setCards(cards.concat(newCard));
    nextId.current += 1;
    console.log(id, ": ", cards, nextId.current)
  }
  const onCreate = () => {
    const newCard = {
      id: nextId.current,
      name: input.name,
      message: input.message,
      colName: props.id,

    };

    addList(newCard);

  };

  const [{ isOver, isOverCurrent }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop(item, monitor) {
      const didDrop = monitor.didDrop();

      let result = monitor.getItem();

      const newCard = {
        id: nextId.current,
        name: result.name,
        message: result.message,
        colName: props.id,
      };
      addList(newCard);
      console.log(id, ": ", cards)
      return item;
      if (didDrop) {
        return
      }
    },

    collect: monitor => ({
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  })

  const moveCard = useCallback(
    async (movedCard) => {
      console.log(movedCard, "will be removed");
      const del = cards.findIndex(v => v.id === movedCard.id);
      console.log('delete:', del)

      await cards.splice(del, 1);
      nextId.current -= 1;
      await cards.map((v, i) => v.id = i + 1)
    },
    [cards],
  )

  const addCard = useCallback(
    (addedCard) => {

      const newCard = {
        id: nextId.current,
        name: addedCard.name,
        message: addedCard.message,
        colName: props.id,

      };
      addList(newCard);
      console.log(newCard, "added");
    }
  )


  return (
    // <div

    <Grid ref={drop} style={{}}>
      <Grid style={{
        display: "inline",
        textAlign: "right",

      }}>
        <MinAddItemDialog addCard={addCard}></MinAddItemDialog>
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