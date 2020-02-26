import React from "react";
import Grid from "@material-ui/core/Grid";
import MinAddItemDialog from "../container/MinAddItemDialog";

export default function MinAddItemDialogComponent(props) {

   

  return (
    <Grid
    style={{
      display: "inline",
      textAlign: "right"
    }}
  >
    <MinAddItemDialog addCard={props.addCard}>Add Card</MinAddItemDialog>
  </Grid>

    
  );
}
