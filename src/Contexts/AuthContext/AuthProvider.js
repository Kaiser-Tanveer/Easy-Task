import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../Firebase/firebase.config';
import Spinner from '../../Shared/Header/Spinner/Spinner';

export const AuthContext = createContext();
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const GProvider = new GoogleAuthProvider();

    // Creating User 
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // Sign in Email 
    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    // Sign in with Google 
    const GSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, GProvider);
    }

    // Sign Out 
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // Observer 
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            return unsubscribe;
        }
    }, [])

    if (loading === true) {
        return <Spinner />
    }

    const authValue = {
        user,
        loading,
        setLoading,
        createUser,
        logIn,
        GSignIn,
        logOut
    }
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;