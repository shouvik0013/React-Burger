import React from 'react';
import Aux from '../../../hoc/Auxiliary';

const orderSummary = ( props ) => {
    //                                  ["salad", "cheese"]
    const ingredientSummary = Object.keys(props.ingredients)
                    .map((element, index) => {
                    return (<li key={element+index} >
                                <span style={{textTransform: "capitalize"}}>{element}</span>: {props.ingredients[element]}
                            </li>);
                    });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to checkout?</p>
        </Aux>
    );
};

export default orderSummary;