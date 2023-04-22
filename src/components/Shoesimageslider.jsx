import React, { useEffect, useState } from 'react';
import banner1 from "../images/banner3.jpg";
import banner2 from "../images/banner2.jpg";
import banner3 from "../images/banner2.jpg";
import banner4 from "../images/banner3.jpg";

export const Shoesimageslider = () => {
  const slides = [banner1,banner2,banner4,banner3]
  const [currentSlide,setcurrentSlide] = useState(0)
  useEffect(()=>{
    const IntervalId = setInterval(() => {
      if(slides.length == 0){
        return
      }
      if(currentSlide === slides.length - 1){
        setcurrentSlide(0)
      }
      else{
        setcurrentSlide(currentSlide + 1)
      }
    }, 2000);
    return ()=>{clearInterval(IntervalId)}
  },[slides])
  return (
    <>
    <div>
      <div className='w-full lg:mt-[116px]  md:mt-[116px] sm:mt-[92px] h-full overflow-hidden'>
        <div className='flex duration-500 transition-transform ease-in-out' style={{transform: `translateX(-${currentSlide * 100}%)`}}>
          {slides.map((items,idx)=>{
            return(
              <img src={items} key={idx} className='w-full dragable-none p-3 object-fit' alt="" />
            )
          })}
        </div>
      </div>
    </div>
    </>
  )
}
