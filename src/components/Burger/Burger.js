import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {
    //                              ["salad", "bacon"]
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, index) => {
                return <BurgerIngredient key={igKey+index} type={igKey}/>
            });
        }).reduce((arr, el) => {    // here arr is the empty [] that we passed as the 2nd argument in reduce function
            // [[aa, bb], [cc, dd]] here el is [aa, bb] and [cc, dd]
            return arr.concat(el);
        }, []);
    
    console.log(transformedIngredients);
    if (transformedIngredients.length === 0) {
        console.log('You forgot to add ingredients');
        transformedIngredients = <p>Please start adding elements!</p>;
    }
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
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
};

export default burger;