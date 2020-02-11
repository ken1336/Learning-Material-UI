import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import MinCard from './MinItemCard'


export default function MinTodoListBox() {
    
    const Itemcard = this.props;

    return (
        <div>
            <Grid item xs >
              <MinCard />

            </Grid>
            <Grid item xs >
              <MinCard />

            </Grid>

        </div>


    );
}