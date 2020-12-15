import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
// burgerLogo is just the path to the burger image
import classes from './Logo.css'


const logo = ( props ) => {
    return (
        <div className={classes.Logo}>
            <img src={burgerLogo} alt="Burger"/>
        </div>
    );
}

export default logo;