'use client';
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider =(props)=>{
    const [signIn,setSignIn] = useState(false);

    const handleSignOutContext = ()=>{
        setSignIn(false);
    }

    const handleSignInContext = ()=>{
        setSignIn(true);
    }

    return(
        <ThemeContext.Provider value={{signIn,handleSignInContext,handleSignOutContext}}>
            {props.children}
        </ThemeContext.Provider>
    )
}