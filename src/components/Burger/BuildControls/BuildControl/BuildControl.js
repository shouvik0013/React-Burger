import React from 'react';
import classes from './BuildControl.css';


const buildControl = (props) => {
    return(
        <div className={classes.BuildControl}>
            {/* igName is Ingredient Name */}
            <div className={classes.Label}>{props.igName}</div>
            <button className={classes.Less}>Less</button>
            <button className={classes.More}>More</button>
        </div>
    );
};

export default buildControl;