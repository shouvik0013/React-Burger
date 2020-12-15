import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import CustomButton from '../../UI/Button/Button';

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
            <p><strong>Price to pay: {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout?</p>
            <CustomButton btnType={"Danger"} clicked={props.purchaseCancel}>CANCEL</CustomButton>
            <CustomButton btnType={"Success"} clicked={props.purchaseContinue}>CONTINUE</CustomButton>
        </Aux>
    );
};

export default orderSummary;