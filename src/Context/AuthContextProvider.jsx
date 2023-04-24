import { createContext, useContext, useEffect, useState } from "react";
import 
{createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
} 
    from 'firebase/auth'
    import {auth} from '../firebase'
import { useNavigate } from "react-router-dom";
const UserContext = createContext()

const AuthContextProvider = ({children}) => {
    const navigate = useNavigate()
    const [user,setUser] = useState({})
    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login account using the google button if website hosted then enable this code    
    // const loginUsingGoogleAccount = async () =>{
    //     try{
    //         const result = await signInWithPopup(auth, new GoogleAuthProvider())
    //         setUser(result.user)
    //         navigate('/')
    //     }
    //     catch(e){
    //         console.log(e.message)
    //     }
    // }

    const logout = () => {
        return (signOut(auth))
    }

    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unsubcribe = onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
        });
        return () =>{
            unsubcribe()
        }
    },[])
  return (
   <UserContext.Provider value={{createUser, user ,logout,signIn, 
//    loginUsingGoogleAccount
   }}>
    {children}
   </UserContext.Provider>
  )
}

export default AuthContextProvider

export const UserAuth = () => {
    return useContext(UserContext)
}