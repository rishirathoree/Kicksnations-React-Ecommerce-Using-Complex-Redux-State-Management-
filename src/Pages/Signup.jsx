
import React, { useState } from 'react'
import sideImage from '../images/banner1.png'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../Context/AuthContextProvider'
export const Signup = () => {
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    const [Error,setError] = useState('')
    const navigate = useNavigate()

    const { createUser, loginUsingGoogleAccount } = UserAuth();

    const handleSubmit = async (e) =>{
        e.preventDefault()
        setError('')
        try{
            await createUser(email,password)
            navigate('/account')
        }
        catch(err){
            setError(err.message)
        }
    }
    
  return (
    <>
    <div className='lg:mt-[116px] md:mt-[92px] sm:mt-[92px]'>
    <div className='grid w-full h-screen lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
        
        <div className='flex  justify-center p-8  items-center'>
            <div className='shadow-2xl rounded-md flex p-8 flex-col items-center justify-center'>
                <div className='text-center -space-y-2'>
                <p className='font-light text-lg'>Sign Up</p>
                </div>
                <form onSubmit={handleSubmit} className='flex flex-col justify-center'>
                <p className='font-light text-xsm'>Email</p>
                    <input onChange={(e)=>{setemail(e.target.value)}} type="text" className='p-2 bg-gray-100 text-xsm mb-4 w-80 focus:outline-none' />
                <p className='font-light text-xsm'>Password</p>
                    <input onChange={(e)=>{setpassword(e.target.value)}} type="text" className='p-2 bg-gray-100 text-xsm mb-4 w-80 focus:outline-none' />
                    <button className='font-light text-xsm text-white p-2 bg-black'>Sign Up</button>
                </form>
                <button 
                    onClick={()=>{loginUsingGoogleAccount()}}
                    className='font-bold w-full mt-2 text-white p-2 bg-blue-500'>Google</button>
                <p className='font-light mt-12 text-xsm'>Do you have an account?</p>
                <Link to="/login"><p className='font-bold underline mt-2 text-blue-500 text-xsm'>Login?</p></Link>
                
            </div>
        </div>
        <div className='sm:hidden md:hidden lg:block'>
            <img src={sideImage} className='w-full h-full object-cover' alt="" />
        </div>
    </div>
    </div>
    </>
  )
}
