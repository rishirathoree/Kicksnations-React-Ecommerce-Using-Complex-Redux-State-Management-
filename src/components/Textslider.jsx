import React, { useEffect, useState } from 'react'

const categories = ['basketball', 'slides'];

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
            className={`w-full overflow-hidden ${
              index === currentText ? 'h-8' : 'h-0 '
            }`}
          >
            <p className='text-center font-bold lg:text-3xl md:text-lg uppercase text-md'>Try out our new <span className={` duration-700 ${index === currentText ? 'opacity-100' : 'opacity-0'}`}>{item}</span> </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TextSlider;
