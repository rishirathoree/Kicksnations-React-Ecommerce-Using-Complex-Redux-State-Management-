import { createContext, useContext, useEffect, useState } from "react";
import 
{createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged} 
    from 'firebase/auth'
    import {auth} from '../firebase'
const UserContext = createContext()

const AuthContextProvider = ({children}) => {
    const [user,setUser] = useState({})
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logout = () => {
        return (signOut(auth))
    }

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(user);
            setUser(currentUser)
        });
        return () =>{
            unsubcribe()
        }
    },[])
  return (
   <UserContext.Provider value={{createUser, user ,logout,signIn}}>
    {children}
   </UserContext.Provider>
  )
}

export default AuthContextProvider

export const UserAuth = () => {
    return useContext(UserContext)
}