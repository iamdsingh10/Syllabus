import React, { useContext, useState } from "react";

 const ThemeContext = React.createContext();   // here we are creating a context object using React's createContext function. This context will be used to share the theme state across components without having to pass props down manually at every level.

export const ThemeContextProvider = ({ children }) => {   // This is a functional component that acts as a provider for the ThemeContext. It takes in children as props, which are the components that will have access to the theme state.
    const [isDarkModeActive, setIsDarkModeActive] = useState(false);   // This line initializes a state variable isDarkModeActive with a default value of false. The setIsDarkModeActive function is used to update this state.

    return <ThemeContext.Provider value={{
        isDarkModeActive,   // This value is provided to all components that consume this context. It indicates whether dark mode is active or not.
        activateLightMode:  ()=> {
            setIsDarkModeActive(false)},   // This function allows components to activate light mode by setting isDarkModeActive to false.
        activateDarkMode:  ()=> {
            setIsDarkModeActive(true)}   // This function allows components to activate dark mode by setting isDarkModeActive to true.
    }}>
        {children}   
    </ThemeContext.Provider>
}
//children is a special prop in React that allows components to pass their child elements to other components. In this case, it allows the ThemeContextProvider to wrap around other components and provide them with access to the theme state.

export const useThemeContext = ()=>  useContext(ThemeContext);   // so that i dont have to use usecontext(themecontext) everywhere