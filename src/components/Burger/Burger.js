import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {
    //                              ["salad", "bacon"]
    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, index) => {
                return <BurgerIngredient key={igKey+index} type={igKey}/>
            })
        });
        //                      [["salad", 2], ["cheese", 4]]
    const ingredients_transformed = Object.entries(props.ingredients)
            .map(igInfo => {
                return [...Array(igInfo[1])].map((_, index) => {
                    return <BurgerIngredient key={igInfo[0]+index} type={igInfo[0]}/>
                });
            });

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {/* <BurgerIngredient type="salad"/>
            <BurgerIngredient type="cheese"/> */}
            {/* here type="bacon" bacon is automatically converted to javascript string
                and passed to BurgerIngredient
            */}
            {/* <BurgerIngredient type="bacon"/>
            <BurgerIngredient type="meat"/> */}
            {ingredients_transformed}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;