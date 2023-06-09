import React from 'react'
import { UserAuth } from '../Context/AuthContextProvider'
import { useNavigate } from 'react-router-dom'
import bg from '../images/banner1.png'
import dp from '../images/dp.png'
const Accountpage = () => {
    const { user, logout } = UserAuth()
    console.log(user);
    const navigate = useNavigate()
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
    <div className='lg:mt-[116px] md:mt-[92px] flex items-center p-8 flex-col  justify-center w-full h-full sm:mt-[92px]'>
        <div className='w-full border rounded-2xl grid overflow-hidden lg:grid-cols-2 md:grid-cols-1 h-full'>
        <div className='w-full h-full overflow-hidden'>
            <img src={bg} alt="" />
        </div>
        <div className='flex md:my-20 sm:my-4 justify-center flex-col items-center'>
        <p className='font-bold text-bold uppercase text-left'>account details</p>
        <div className='w-20 h-20 my-4 overflow-hidden rounded-full'>
            <img src={dp} alt="" />
        </div>
            <p className='font-light text-xsm'>{user.email}</p>
            <span 
            onClick={handleLogout}
            className='font-light cursor-pointer text-xsm bg-black text-white my-2 p-2'>Logout</span>
            <span 
            onClick={()=>{navigate('/')}}
            className='font-light cursor-pointer text-xsm bg-black text-white my-2 p-2'>Go To Home</span>
        </div>
        </div>
    </div>
  )
}
 
export default Accountpage