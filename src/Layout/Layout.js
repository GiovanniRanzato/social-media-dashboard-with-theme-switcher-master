import React, {useEffect} from 'react';
// CONFIG
import { LIGHT_THEME_STYLES, DARK_THEME_STYLES,} from '../Config/Config';

// STYLES
import classes from './Layout.module.css'

// COMPONETNS
import Title from './Title/Title';


const setTheme = (theme) => {
    Object.keys(theme).forEach(key => {
        const value = theme[key];
        console.log("update ", key," with ",value)
        document.documentElement.style.setProperty(key, value);
    });

}


const Layout = (props) => {
    const themeStyles = props.darkMode ? DARK_THEME_STYLES : LIGHT_THEME_STYLES;
    useEffect(()=>{
        setTheme(themeStyles);
    },[themeStyles])

    return<div >
        <section className={classes.header}>
            <Title title={"GGG"} subTitle={"ffff"}></Title>
            <div onClick={() =>props.setDarkMode(!props.darkMode) } >TOGGLER </div>
        </section>
        <section>
            GENERAL OVERVIE
        </section>
        <section>
            DAILY OVERVIE
        </section>
 
    </div>


}
export default Layout;