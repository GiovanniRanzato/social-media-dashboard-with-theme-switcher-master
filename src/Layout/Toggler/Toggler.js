import React, {useState} from 'react';
import classes from './Toggler.module.css';
import Clickable from '../../Hoc/Clickable/Clickable';

const Toggler = (props) => {
    const [checked, setChecked] = useState(true);
    const switchunchecked = checked ?  null : classes.switchunchecked;
    return <div className={classes.container} >
        <label className={classes.label}>{props.label} </label>
        <Clickable className={classes.switch +" "+switchunchecked} onClick={()=> { setChecked(!checked); props.onClick()}}>
        <input type={"checkbox"} checked={checked} onChange={()=>null} label={props.label} aria-label={props.label} title={props.label}/> 
            <span className={classes.slider}></span>
        </Clickable>
    </div>;
}
export default Toggler;