import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';


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
            purchasable: false,
            totalPrice: 40,

        } // end of state
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients).map((igKey)=>ingredients[igKey])
        .reduce((total, currVal, currInd)=>total+currVal, 0);
        this.setState((prevState, props) => {
            return {
                purchasable: sum>0
            }
        });
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
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientsHandler = (type) => {
        // state should be updated in a immutable way
        const oldCount = this.state.ingredients[type];
        if(oldCount <= 0) {
            return;
        }
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;


        this.setState((prevState, props) => {
            return {
                ingredients: updatedIngredients,
                totalPrice: newPrice
            };
        });
        this.updatePurchaseState(updatedIngredients);
    }

    // we must define render method in class based component
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return(
            <Aux>
                <Modal>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientsHandler}
                    ingredientRemoved={this.removeIngredientsHandler}
                    disableButton={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;