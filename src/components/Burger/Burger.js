import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {
    //                          ["salad", "cheese"]
    const ingredients = Object.keys(props.ingredients)
    .map((ingredient, index) => {
        let ingredientCount = props.ingredients[ingredient];   // here got the actual no. of ingredient like salad:2
        let newArray = [];
        for (let i=0; i<ingredientCount; i++) {
            newArray.push(<BurgerIngredient type={ingredient}/>);
        }
        return newArray; //   [["a", "a"], ["b"]]
    }); // end of map
    // Object.keys().entries();
    const flatenedIngredients = ingredients.flat();
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
            {flatenedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;