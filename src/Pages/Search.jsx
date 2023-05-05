import React from 'react'
const shimmer = new Array(10).fill(1)
const Search = () => {
  return (
    <div className='lg:mt-[116px] md:mt-[92px] h-full p-4  w-full sm:mt-[92px]'>
        <div className='grid grid-cols-5 gap-4'>
            {shimmer.map((index)=>{
                return(
                    <div key={index} className='w-full h-[300px] bg-white  rounded-lg p-4'>
                <div className='w-full h-[200px] rounded-lg animate-pulse bg-gray-100'></div>
                <div className='w-2/3 h-4 mt-3 rounded-lg animate-pulse bg-gray-100'></div>
                <div className='w-1/3 h-4 mt-3 rounded-lg animate-pulse bg-gray-100'></div>
            </div>
                )
            })}
        </div>
    </div>
  )
}

export default Search