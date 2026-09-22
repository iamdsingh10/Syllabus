//import { useContext } from "react";
//import { ThemeContext, useThemeContext } from "./ThemeProvider";
import { useThemeContext } from "./ThemeProvider";


export default function ThemeToggler(){
   // const themeContextvalue = useContext(ThemeContext);    ek hee baat hai below line too
    //const{isDarkModeActive, activateLightMode, activateDarkMode} = useContext(ThemeContext);
    const {isDarkModeActive,activateLightMode,activateDarkMode} = useThemeContext();
    return <>
    <button onClick={()=>{
        if (isDarkModeActive){
            activateLightMode();
        } else  {
            activateDarkMode();
        }}
    }>{isDarkModeActive ? 'Switch to Light Mode' : 'Switch to Dark Mode'}</button>
    </>
}