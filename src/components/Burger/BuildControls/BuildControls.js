import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
import { number } from 'prop-types';

const controls = [
    {label: "Salad", type:"salad"},
    {label: "Bacon", type:"bacon"},
    {label: "Cheese", type:"cheese"},
    {label: "Meat", type:"meat"},
];

const buildControls = ( props ) => {
    const transformedControls = controls.map((elms, index) => {
        return(
            <BuildControl
                key={elms.label}
                igName={elms.label}
                disableButton={props.disableButton[elms.type]}
                ingredientAdded={() => {
                    props.ingredientAdded(elms.type)
                }}
                ingredientRemoved={() => props.ingredientRemoved(elms.type)}/>
        );
    });
    return(
        <div className={classes.BuildControls}>
            <p><em>Current Price: </em><strong>{props.price.toFixed(2)}</strong></p>
            {transformedControls}
        </div>
    );
};

export default buildControls;