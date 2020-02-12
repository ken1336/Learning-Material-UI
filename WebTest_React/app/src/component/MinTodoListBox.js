import React, { useRef,useState, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MinCard from './MinItemCard'

import { useDrop } from 'react-dnd'
import { ItemTypes } from './Constants'
import { Button } from '@material-ui/core';

export default function MinTodoListBox(props) {

  const [id, setId] = useState(props.id);
  const [cards, setCards] = useState([
    {
      id: 1,
      name: 'name',
      message: 'testesttest',
    }
  ]);
  const [input, setInput] = useState({
    name: '',
    message: '',
  });

  const onInputNameChange = e=>{
    // setInput({
    //   name: e.target
    // }
      
    //)
  }
  const onInputMessageChange = e =>{
    console.log(e.target.value)
    setInput({
      message: e.target.value
    }
      
    )
  }
  const nextId = useRef(2);
  
  const onCreate = () => {
    const card = {
      id: nextId.current,
      name: input.name,
      message: input.message
    };
    console.log(id,"input.message: ",input.message)
    setCards(cards.concat(card));
    nextId.current += 1;
    
    console.log(id,": ",cards)
  };
  
  
  
  
 

  const [{ isOver, isOverCurrent }, drop] = useDrop({
    accept: ItemTypes.CARD,
    drop(item, monitor) {
      const didDrop = monitor.didDrop()
      console.log(id,": ",cards)
      if (didDrop ) {
        
        return
      }
      
    },

    collect: monitor => ({
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
    }),
  })


  
    return (
      // <div

      <Grid ref={drop} style={{ height: "700px" }}>
        <input
        onChange = {onInputNameChange}></input>
        <br></br>
        <input
        onChange = {onInputMessageChange}></input>
        <br></br>
        <Button onClick={onCreate}>add</Button>
        {cards.map(v => (
          <MinCard
            key={v.id}
            id={v.id}
            name={v.name}
            message={v.message}
          ></MinCard>
        ))}
      </Grid>
    );
}