import React from "react";

// I just created the context here using react, whenever i create context i will be able to get a provider
// export const PersonContext = React.createContext({   
//     firstName: 'kuntal',
//     lastName: 'Banerjee'
// });

export const PersonContext = React.createContext()

//whenever context is used it has got a provider property which is nothing but a component 
//PersonContext.Provider


export function PersonContextProvider({ children }) {
    // just trying to make self relying component, so that we can use it anywhere in the app and we don't have to pass the props from the parent component
    // we can use the state inside the provider and we can pass the state to the children component using the provider
    const [name, setName] = React.useState({
        firstName: 'kuntal',
        lastName: 'banerjee'
    });
    return <PersonContext.Provider value={{name,
        updateName: setName
    }}>
        {children}
    </PersonContext.Provider>
}