import React from 'react';
import classes from './GeneralOverview.module.css';

import {TEXT} from '../../Config/Config';
import {kFormatter, defineStyle} from '../../Shared/shared';
import Clickable from '../../Hoc/Clickable/Clickable';

const defineSocialStyle = (social, classes) => {
    switch (social) {
        case "fb": return classes.fb;
        case "tw": return classes.tw;
        case "in": return classes.in;
        case "yt": return classes.yt;
        default: return null;
    }

}

const GeneralOverview = (props) => {
    const contents = props.contents;
    const render = contents.map(content => {
        const trendStyle=defineStyle(content.dailyTrend, [classes.trendStable,classes.trendPositive,classes.trendNegative]);
        const socialStyle=defineSocialStyle(content.socialId,classes);
        return <Clickable key={content.id} className={classes.card}>
            <div className={classes.cardBody+" "+socialStyle}>
                <div className={classes.title}>
                    <img src={content.icon} alt={"icon"}></img>
                    <div>{content.name}</div>
                </div>
                <div>
                <div className={classes.value}>{kFormatter(content.sub)}</div>
                <div className={classes.label}>{content.subLabel}</div>
                </div>
    <div className={classes.trend+" "+trendStyle}>{Math.abs(content.dailyTrend)}{" "}{TEXT.dailyTrendLabel}</div>
            </div>
        </Clickable>
    });
    return (<React.Fragment>
        {render}
    </React.Fragment>);

}
export default GeneralOverview;
