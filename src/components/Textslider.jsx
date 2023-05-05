import React, { useEffect, useState } from 'react'

const categories = ['basketball', 'slides','footwear', 'slides'];

const TextSlider = () => {
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const handleTextSliderInterval = setInterval(() => {
      setCurrentText((currentText + 1) % categories.length);
    }, 2000);

    return () => {
      clearInterval(handleTextSliderInterval);
    };
  }, [currentText]);

  return (
    <>
      <div className='p-20 flex w-full items-center overflow-hidden flex-col justify-center'>
        {categories.map((item, index) => (
          <div
            key={index}
            className={`w-full duration-500 overflow-hidden ${
              index === currentText ? 'h-8' : 'h-0'
            //   if add the animation to text enable if you want 
            //   index === currentText ? 'h-8 traslate-y-0 ' : 'h-0 traslate-y-10 '
            }`}
          >
          <span className={`${index === currentText ? '-translate-y-0': '-translate-y-10'} text-center font-bold lg:text-3xl md:text-lg uppercase text-md`}>{item}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default TextSlider;
