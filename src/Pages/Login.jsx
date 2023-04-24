
import React, { useState } from 'react'
import sideImage from '../images/banner1.png'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContextProvider'
export const Login = () => {
    const {signIn,user } = UserAuth() || {}
    const navigate = useNavigate()
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    const [Error,setError] = useState('')
    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            await signIn(email,password)
            navigate('/account')
        }
        catch(e){
            setError(e.message)
            console.log(e.message)
        }
    }
    console.log(user);
  return (
    <>
    <div className='lg:mt-[116px] md:mt-[92px] sm:mt-[92px]'>
    <div className='grid w-full h-screen lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
        <div className='sm:hidden md:hidden lg:block'>
            <img src={sideImage} className='w-full h-full object-cover' alt="" />
        </div>
        <div className='flex bg-[sideImage] justify-center p-8  items-center'>
            <div className='shadow-2xl rounded-md flex p-8   flex-col items-center justify-center'>
                <div className='text-center -space-y-2'>
                <p className='font-light text-lg'>Login</p>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col justify-center'>
                <p className='font-light text-xsm'>Email</p>
                    <input onChange={(e)=>{setemail(e.target.value)}} type="text" className='p-2 bg-gray-100 text-xsm mb-4 w-80 focus:outline-none' />
                <p className='font-light text-xsm'>Password</p>
                    <input onChange={(e)=>{setpassword(e.target.value)}} type="text" className='p-2 bg-gray-100 text-xsm mb-4 w-80 focus:outline-none' />
                    <button className='font-light text-white p-2 bg-black'>Login</button>
                </form>
                    
                <div><p className={`font-light duration-200 mt-2 text-xsm ${Error ? 'opacity-100 -translate-y-0' : 'opacity-0 -translate-y-5'}`}>Something is wrong</p></div>
                <p className='font-light mt-2 text-xsm'>Create new account</p>
                <Link to="/Signup"><p className='font-bold underline mt-2 text-blue-500 text-xsm'>Signup</p></Link>
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
