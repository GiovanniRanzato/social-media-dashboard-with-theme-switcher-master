import React from 'react';
import classes from './DailyOverview.module.css';

import {kFormatter, defineStyle} from '../../Shared/shared';
import Clickable from '../../Hoc/Clickable/Clickable';

const DailyOverview = (props) => {
    const cards = props.contents.map(content => {
        const trendStyle=defineStyle(content.percentTrend, [classes.trendStable,classes.trendPositive,classes.trendNegative]);
        return (<Clickable key={content.id} className={classes.container}>
            <div className={classes.top}>
        <div className={classes.label}> {content.valueLabel}</div>
                <img src={content.icon} alt="icon"></img>
            </div>
            <div className={classes.bottom}>
                <div className={classes.value}> {kFormatter(content.value)}</div>
                <div className={classes.trend+" "+trendStyle}> {Math.abs(content.percentTrend)}%</div>
            </div>
        </Clickable>);
    });
    return <React.Fragment>
        <h2 className={classes.title}>{props.title}</h2>
        {cards}
        </React.Fragment>
}
export default DailyOverview; 