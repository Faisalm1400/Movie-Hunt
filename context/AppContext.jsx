import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);



    const value = {
        
    }
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}


export const useApp = () => {
    const context = useContext(AppContext)
    if (context === undefined) {
        throw new Error('Must be inside the provider');
    }

    return context;
}