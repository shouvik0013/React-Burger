import React from 'react';
import classes from './BuildControls.css';

const buildControls = ( props ) => {
    return(
        <div className={classes.BuildControls}>
            {/* igName is Ingredient Name */}
            <div>{props.igName}</div>
            <button>Less</button>
            <button>More</button>
        </div>
    );
};

export default buildControls;