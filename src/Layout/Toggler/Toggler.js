import React, {useState} from 'react';
import classes from './Toggler.module.css';
import Clickable from '../../Hoc/Clickable/Clickable';

const Toggler = (props) => {
    const [checked, setChecked] = useState(true);
    const switchunchecked = checked ?  null : classes.switchunchecked;
    return <div className={classes.container} >
        <p className={classes.label}>{props.label} </p>
        <Clickable className={classes.switch +" "+switchunchecked} onClick={()=> { setChecked(!checked); props.onClick()}}>
        <input type={"checkbox"} checked={checked} onChange={()=>null} label={"change theme"}/> 
            <span className={classes.slider}></span>
        </Clickable>
    </div>;
}
export default Toggler;