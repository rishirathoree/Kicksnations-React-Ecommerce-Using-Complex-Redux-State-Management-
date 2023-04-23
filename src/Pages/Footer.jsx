import React from 'react'
import { NavLink } from 'react-router-dom'
const navs = ['footwear','apparel','girls','basketball','slides','accessories'];
const Footer = () => {
  return (
    <>
    <div className='grid lg:grid-cols-2 md:grid-cols-2 border-t p-8 gap-2'>
        <div className='my-4'>
            <NavLink to="/" className='flex flex-col -space-y-4'>
                <span className='font-bold text-2xl sm:text-center lg:text-left '>Kicks</span>
                <span className='font-bold text-2xl sm:text-center lg:text-left '>Nation</span>
            </NavLink>
        </div>
        <div className='flex items-center sm:justify-center lg:justify-end'>
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5'>
        {navs.map((items,idx)=>{return <NavLink key={idx} to={items}><span className='font-light text-sm uppercase'>{items}</span></NavLink>})}
        </div>
        </div>
    </div>
    </>
  )
}

export default Footer