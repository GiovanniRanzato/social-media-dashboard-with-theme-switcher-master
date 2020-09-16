import React, {useEffect} from 'react';
// CONFIG
import { LIGHT_THEME_STYLES, DARK_THEME_STYLES, TEXT, DATA_FOLLOWERS, DATA_OVERVIEW, DATA_SUMMARY} from '../Config/Config';

// STYLES
import classes from './Layout.module.css'

// COMPONETNS
import Title from './Title/Title';
import Toggler from './Toggler/Toggler'
import GeneralOverview from './GeneralOverview/GeneralOverview';
import DailyOverview from './DailyOverview/DailyOverview';

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
    
    return<div className={classes.maincontainer}>
        <section className={classes.header}>
            <Title title={TEXT.title} subTitle={TEXT.subTitle+DATA_FOLLOWERS}></Title>
            <Toggler onClick={() =>props.setDarkMode(!props.darkMode) } label={TEXT.theme}> </Toggler>
        </section>
        <section>
            <GeneralOverview contents={DATA_SUMMARY} />
        </section>
        <section>
            <DailyOverview contents={DATA_OVERVIEW} />
        </section>
 
    </div>


}
export default Layout;