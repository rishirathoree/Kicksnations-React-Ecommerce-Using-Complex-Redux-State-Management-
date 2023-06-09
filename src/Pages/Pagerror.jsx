import React from 'react'
import jordans from "../images/jordans.png"
import { useNavigate } from 'react-router-dom'
export const Pagerror = () => {
    const navigate = useNavigate()
    return (
      <>
      <div className='lg:mt-[116px] md:mt-[92px] sm:mt-[92px]'>
          <div className='w-full flex justify-center flex-col items-center h-screen'>
              <img src={jordans} className='w-60 animate-bounce h-40' alt="" />
              <p className='font-lighter  text-xsm'>404 Page Found</p>
              <button
              onClick={()=>{navigate('/')}}
              className='bg-black font-light text-white uppercase text-xsm px-12 py-2  mt-4'>go back</button>
          </div>
      </div>
      </>
      )
}
