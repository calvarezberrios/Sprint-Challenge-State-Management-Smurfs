import React from 'react';
import useStyles from "./useStyles";
import Grid from '@material-ui/core/Grid';
import SmurfCard from "./Cards";
import { useSelector } from 'react-redux';


export default function FullWidthGrid() {
    const classes = useStyles();
    const smurfs = useSelector(state => state.smurfsReducer.smurfs);

    return (
        <div className={classes.grid}>
            <Grid container spacing={3}>
                    {smurfs.map(smurf => (
                        
                            <SmurfCard key = {smurf.id} {...smurf} />
                        
                    ))}
            </Grid>
        </div>
    );
}
