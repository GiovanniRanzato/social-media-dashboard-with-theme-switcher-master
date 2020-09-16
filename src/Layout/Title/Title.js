import React from 'react';
import classes from './Title.module.css';

const Title = (props) => {
    return <div className={classes.container}>
        <h1 className={classes.title}> {props.title}</h1>
        <p  className={classes.subTitle}>{props.subTitle}</p>
    </div>
}
export default Title;
