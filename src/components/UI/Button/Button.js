import React from 'react';
import classes from './Button.css';


const button = (props) => {
    return (
        <button
        // className must be a string, so here we are joining the array elements into a string
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}
        >{props.children}</button>
    );
}

export default button;