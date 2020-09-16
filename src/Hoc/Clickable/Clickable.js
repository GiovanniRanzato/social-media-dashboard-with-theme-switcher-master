import React from 'react';
import classes from './Clickable.module.css'

const Clickable = (props) => {
    return <div 
        className={classes.clickable+" "+props.className}
        onClick={props.onClick}>
        {props.children}
    </div>
}
export default Clickable;