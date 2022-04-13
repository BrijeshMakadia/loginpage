import React, { createContext, useContext, useEffect, useState } from 'react';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    // signOut,
    onAuthStateChanged    
} from 'firebase/auth';
import auth from '../Firebase';

const userAuthContext = createContext();

export function UserAuthContextProvider({children}) {
    const [user, setUser] = useState("");
    
    function signUp(email, password){
        return createUserWithEmailAndPassword(auth, email, password);
    }
    function logIn (email, password) {
        return signInWithEmailAndPassword(auth, email, password);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currrentUser) => {
            setUser(currrentUser);
        });
        return () => {
            unSubscribe();
        }
    }, []);
  return (
    <>
          <userAuthContext.Provider value={{ user, signUp, logIn}}>
            {children}
        </userAuthContext.Provider>
    </>
  )
}

export function useUserAuth() {
    return useContext(userAuthContext);
}
