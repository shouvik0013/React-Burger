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
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;