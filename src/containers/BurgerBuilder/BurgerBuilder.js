import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';


// ALWAYS USE UPPER-CASE TO INDICATE GLOBAL VARIABLE
const INGREDIENT_PRICES = {
    salad: 10,
    bacon: 20,
    cheese: 15.323,
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
            purchaseable: false,
            totalPrice: 40,

        } // end of state
    }

    addIngredientsHandler = (type) => {
        // state should be updated in a immutable way
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        let updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAddtion = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddtion;

        console.log('updatedIngredients: ' + Object.keys(updatedIngredients).map((elems)=>updatedIngredients[elems]));
        let total=Object.keys(updatedIngredients).map((elems)=>updatedIngredients[elems]).reduce((total, curv, curi)=>total+curv);
        let newPurchaseable = total>0;


        console.log('totalIngredients: ' + total);
        this.setState((prevState, props) => {
            return {
                ingredients: updatedIngredients,
                totalPrice: newPrice,
                purchaseable: newPurchaseable,
            };
        });
    }

    removeIngredientsHandler = (type) => {
        // state should be updated in a immutable way
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        let updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;

        console.log('updatedIngredients: ' + Object.keys(updatedIngredients).map((elems)=>updatedIngredients[elems]));
        let total=Object.keys(updatedIngredients).map((elems)=>updatedIngredients[elems]).reduce((total, curv, curi)=>total+curv);
        let newPurchaseable = total>0;

        this.setState((prevState, props) => {
            return {
                ingredients: updatedIngredients,
                totalPrice: newPrice,
                purchaseable: newPurchaseable,
            };
        });
    }

    // we must define render method in class based component
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        // console.log(this.state);
        return(
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientsHandler}
                    ingredientRemoved={this.removeIngredientsHandler}
                    disableButton={disabledInfo}
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;