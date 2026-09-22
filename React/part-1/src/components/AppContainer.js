import { useThemeContext } from "./ThemeProvider";
import ThemeToggler from "./ThemeTogglerEx";

export default function AppContainer({children}){
    const {isDarkModeActive} = useThemeContext();
    return<><div className={`app-container ${isDarkModeActive ? 'dark-mode' : 'light-mode'}`}>
    <ThemeToggler/>
    {children}
    </div></>
}