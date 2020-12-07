import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


// ALWAYS USE UPPER-CASE TO INDICATE GLOBAL VARIABLE
const INGREDIENT_PRICES = {
    salad: 10,
    bacon: 20,
    cheese: 15,
    meat: 25
};


class BurgerBuilder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0,
            },
            totalPrice: 40,

        } // end of state
    }
    addIngredientsHandler = (type) => {
        // state should be updated in a immutable way
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddtion = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddtion;


        this.setState((prevState, props) => {
            return {
                ingredients: updatedIngredients,
                totalPrice: newPrice
            };
        });
    }

    removeIngredientsHandler = (type) => {

    }

    // we must define render method in class based component
    render() {
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientsHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;