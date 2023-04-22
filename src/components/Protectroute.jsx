import React from 'react'
import { UserAuth } from '../Context/AuthContextProvider'
import { Navigate } from 'react-router-dom'

const Protectroute = ({children}) => {
    const {user} = UserAuth()
    if(!user){
        return <Navigate to="/login"></Navigate>
    }
  return children
}

export default Protectroute