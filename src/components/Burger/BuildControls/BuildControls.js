import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

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
                ingredientAdded={() => {
                    props.ingredientAdded(elms.type)
                }}/>
        );
    });
    return(
        <div className={classes.BuildControls}>
            {transformedControls}
        </div>
    );
};

export default buildControls;