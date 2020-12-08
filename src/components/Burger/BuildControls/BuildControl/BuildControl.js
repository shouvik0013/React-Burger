import React from 'react';
import classes from './BuildControl.css';



const buildControl = (props) => { 
    return(
        <div className={classes.BuildControl}>
            {/* igName is Ingredient Name */}
            <div className={classes.Label}>{props.igName}</div>
            <button 
                className={classes.Less}
                onClick={props.ingredientRemoved}
                disabled={props.disableButton}
                >Less</button>
            <button 
                className={classes.More}
                onClick={props.ingredientAdded}>More</button>
        </div>
    );
};

export default buildControl;