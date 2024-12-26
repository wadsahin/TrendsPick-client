import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import axios from "axios";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Create new user
  const userSignup = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  // Login user
  const userLogin = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  // Google login
  const provider = new GoogleAuthProvider();
  const loginWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  }

  // User update
  const userUpdate = (updatedInfo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, updatedInfo);
  }

  // User Logout
  const userLogout = () => {
    setLoading(true);
    return signOut(auth);
  }

  // Manage user using Auth Observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser?.email) {
        console.log(currentUser);
        setUser(currentUser);
        // jwt token
        const user = { email: currentUser.email };
        axios.post("http://localhost:5000/jwt", user, { withCredentials: true })
          .then(res => {
            console.log("login token", res.data);
            setLoading(false);
          })
          .catch(error => {
            setLoading(false);
          })
      }
      else {
        setUser(null);
        axios.post("http://localhost:5000/logout", {}, { withCredentials: true })
          .then(res => {
            console.log("Logout token", res.data);
            setLoading(false);
          })
          setLoading(false);
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
    setLoading,
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