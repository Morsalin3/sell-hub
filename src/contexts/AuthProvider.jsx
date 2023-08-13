import { createContext, useEffect, useState } from "react";
import {getAuth, onAuthStateChanged, signOut} from 'firebase/auth';
import app from "../firebase/firebase.config";

 export const AuthContext = createContext(null);

 const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState (true);
    

    //logout
    const logOut =()=>{
        setLoading(true);
        return signOut(auth)
    }

    // user observer

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log('User is Observing', currentUser);
            setUser(currentUser);
            setLoading(true);
        });
        return () => unsubscribe();
    },[])

    const authInfo = {
        user,
        loading,
        logOut,

    }

     
    return (
        <AuthContext.Provider value={authInfo}>
                {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;