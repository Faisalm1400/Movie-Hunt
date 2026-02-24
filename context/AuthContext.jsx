import { createContext, useContext, useState } from "react";
import { supabase } from "../lib/supabase/client";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signIn = async (email, password) => {

    }
    const signUp = async (email, password) => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });

        if (error) throw error;

        if (data.user) {
            console.log(user)
        }
    }


    const value = {
        user,
        signUp
    }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}


export const useAuth = () => {
    const context = useContext(AuthContext)
    if (context === undefined) {
        throw new Error('Must be inside the provider');
    }

    return context;
}