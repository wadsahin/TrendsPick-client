import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";


export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create new user
  const userSignup = (email, password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Login user
  const userLogin = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Google login
  const provider = new GoogleAuthProvider();
  const loginWithGoogle = () =>{
    return signInWithPopup(auth, provider);
  }

  // User update
  const userUpdate = (updatedInfo) =>{
    return updateProfile(auth.currentUser, updatedInfo);
  }

  // User Logout
  const userLogout = () =>{
    return signOut(auth);
  }

  // Manage user using Auth Observer
  useEffect(() =>{
    const unsubscribe =  onAuthStateChanged(auth, (currentUser) =>{
      if(currentUser){
        console.log(currentUser);
        setUser(currentUser);
      }
      else{
        setUser(null);
        // console.log("User is signed out");
      }
    })

    return () => {
      unsubscribe();
    }
  }, [])



  const authInfo = {
    user,
    loading,
    userSignup,
    userLogin,
    loginWithGoogle,
    userLogout,
    userUpdate,
    
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;