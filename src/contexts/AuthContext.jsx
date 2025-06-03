import React, { useState, useEffect, useContext } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";


export const AuthContext = React.createContext()

export function AuthProvider({children}){

    const [user, setUser] = useState({});
    const [authReady, setAuthReady] = useState(false);

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser),
        setAuthReady(true);
    });

    return () => {
        unsubscribe();
    }
    }, []);

    return (
        <AuthContext.Provider value={{ user, authReady }}>
            {children}
        </AuthContext.Provider>
    )
}
