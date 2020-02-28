import React from "react";
import MinCard from "../container/MinItemCardContainer";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

export default function MinTodoListBox(props) {
  return (
    <GridList cols={1} style={{}}>
      <GridListTile
        style={{
          height: "100%",
          minHeight: "700px",
          maxHeight: "700px",
          overflow: "scroll"
        }}
      >
        {props.cards.map((v,i) => (
          <MinCard
            keys={i}
            id={v.id}
            name={v.name}
            message={v.message}
            colName={v.colName}
            moveCard={props.event}
          ></MinCard>
        ))}
      </GridListTile>
    </GridList>
  );
}