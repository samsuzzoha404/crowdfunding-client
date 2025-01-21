import { createContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
} 
from "firebase/auth";
import app from "../Firebase/firebase.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Create new user
    const createNewUser = async (email, password, displayName, photoURL) => {
        setLoading(true);
        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);
            const newUser = result.user;
            await updateProfile(newUser, { displayName, photoURL });
            setUser({ ...newUser, displayName, photoURL });
        } catch (error) {
            console.error("Error creating user:", error.message);
        } finally {
            setLoading(false);
        }
    };

    // Login with email and password
    const userLogin = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password).then((result) => {
            setUser(result.user); // Update user state manually
            setLoading(false);
        });
    };

    // Login with Google
    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider).then((result) => {
            setUser(result.user); // Update user state manually
            setLoading(false);
        });
    };

    // Logout
    const logOut = () => {
        setLoading(true);
        return signOut(auth).then(() => {
            setUser(null); // Clear user state
            setLoading(false);
        });
    };

    // Monitor auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => unsubscribe();
    }, []);

    const authInfo = {
        user,
        createNewUser,
        userLogin,
        signInWithGoogle,
        logOut,
        loading,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;