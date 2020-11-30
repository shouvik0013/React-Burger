import React, { Component } from 'react';
import PropTypes from 'prop-types'
import classes from './BurgerIngredient.css';

class BurgerIngredient extends Component{

    // constructor(props) {
    //     super(props);
    // }

    render() {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread-bottom'):
                // need to add semicolon (;) after <div></div> because it is also javascript
                ingredient = <div className={classes.BreadBottom}></div>;
                break;

            case ('bread-top'):
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;

            case ('meat'):
                ingredient = <div className={classes.Meat}></div>;
                break;

            case ('cheese'):
                ingredient = <div className={classes.Cheese}></div>;
                break;

            case ('salad'):
                ingredient = <div className={classes.Salad}></div>; // need to add ; after every line in javascript
                break;

            case ('bacon'):
                ingredient = <div className={classes.Bacon}></div>
                break;

            default:
                ingredient = null;
        }

        return ingredient;
    }
} 

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired,  // isRequired enforces to pass type of type of string
}

export default BurgerIngredient;