import React from 'react'
import { UserAuth } from '../Context/AuthContextProvider'
import { useNavigate } from 'react-router-dom'

const Accountpage = () => {
    const {User, logout} = UserAuth()
    const navigate = useNavigate
    const handleLogout = async () => {
        try{
            await logout()
            navigate('/')
        }
        catch(e){
            console.log(e.message)
        }
    }
  return (
    <div className='lg:mt-[116px] md:mt-[92px] sm:mt-[92px]'>
        <p>email:{User.email}</p>
        <button onClick={handleLogout} className='text-sm bg-black text-white p-2'>Log out</button>
    </div>
  )
}

export default Accountpage