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
    const [User,setUser] = useState({})
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logout = (auth) => {
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(User);
            setUser(currentUser)
        })
        return () =>{
            unsubcribe()
        }
    })
  return (
   <UserContext.Provider value={{createUser,User,logout}}>
    {children}
   </UserContext.Provider>
  )
}

export default AuthContextProvider

export const UserAuth = () => {
    return useContext(UserContext)
}