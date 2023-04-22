
import React, { useState } from 'react'
import sideImage from '../images/banner1.png'
import { Link } from 'react-router-dom'
export const Login = () => {
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    const handleSubmit = (e) =>{
        
    }
    console.log(email,password);
  return (
    <>
    <div className='lg:mt-[116px] md:mt-[92px] sm:mt-[92px]'>
    <div className='grid w-full h-screen lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1'>
        <div className='sm:hidden md:hidden lg:block'>
            <img src={sideImage} className='w-full h-full object-cover' alt="" />
        </div>
        <div className='flex bg-[sideImage] justify-center px-2  items-center'>
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
                <p className='font-light mt-12 text-xsm'>Do you have an account?</p>
                <Link to="/Signup"><p className='font-bold underline mt-2 text-blue-500 text-xsm'>Signup?</p></Link>
                
            </div>
        </div>
    </div>
    </div>
    </>
  )
}
