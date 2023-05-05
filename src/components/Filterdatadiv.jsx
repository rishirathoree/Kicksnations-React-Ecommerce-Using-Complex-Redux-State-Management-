import React, { useEffect, useRef, useState } from 'react'
import { Hightolow, lowToHigh } from '../actions/Productaction'
import { useDispatch } from 'react-redux'
const Filterdatadiv = () => {
    const dispatch = useDispatch()
    const [filterVisible,setfilterVisible] = useState(false)

    const handleSortHighLow = () => {
        dispatch(Hightolow())
    }
    const filterPricediv = useRef()
    const handleSortLowHigh = () => {
        dispatch(lowToHigh())
    }
    useEffect(() => {
        const handleDocumentClick = (event) => {
          if (filterPricediv.current && !filterPricediv.current.contains(event.target)) {
            setfilterVisible(false);
          }
        };
    
        document.addEventListener('click', handleDocumentClick);
    
        return () => {
          document.removeEventListener('click', handleDocumentClick);
        };
      }, [filterVisible]);
    const togglefilterVIsible = (e) =>{
        e.stopPropagation()
        setfilterVisible(prev=>!prev)
    }
    console.log(filterVisible)
    
    return (    
        <div className='flex fixed items-center justify-center p-2'>
        <div onClick={togglefilterVIsible} className='relative'>
            <p className='text-xsm font-light uppercase'>filter</p>
        </div>
        <div ref={filterPricediv} className={`top-8 flex w-max py-2 bg-white h-max flex-col rounded-md items-center justify-center left-2 absolute ${filterVisible ? 'opacity-100' : 'opacity-0'}`}>
        <p onClick={handleSortHighLow} className='cursor-pointer text-xsm hover:bg-purple-500 hover:text-white p-2'>High to Low</p>
        <p onClick={handleSortLowHigh} className='cursor-pointer text-xsm hover:bg-purple-500 hover:text-white p-2'>Low to High</p>
        </div>
        </div>
    )
}

export default Filterdatadiv
