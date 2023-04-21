import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';


const navs = ['footwear', 'apparel', 'girls', 'basketball', 'slides', 'accessories'];

const Navbar = () => {
  const [MenuVisible, setMenuVisible] = useState('-translate-x-full')

  const toggleMenu = () => {
    setMenuVisible(MenuVisible === '-translate-x-full' ? 'translate-x-0' : '-translate-x-full')
  }
  return (
    <>
      <div className='w-full fixed top-0 z-50 bg-white right-0 p-1 shadow'>
        <div className='w-full h-full  p-4 flex justify-between items-center'>
            <div>
            <div className="menu-toggle" onClick={toggleMenu}>
      <div className={`duration-300 ${MenuVisible === 'translate-x-0' ? 'translate-y-[5px] -rotate-45' : 'translate-y-0 rotate-0'} w-4 h-[1px] bg-black`}></div>
      <div className={`my-1 duration-300 ${MenuVisible === 'translate-x-0' ? 'hidden' : ''} w-4 h-[1px] bg-black`}></div>
      <div className={`duration-300 ${MenuVisible === 'translate-x-0' ? 'translate-y-1 rotate-45' : ''} w-4 h-[1px] bg-black`}></div>
    </div>
                {/* hamburger menusidebar  */}
                <div className={`lg:w-1/5 md:w-1/5 sm:w-2/5 duration-100 -z-[100] lg:top-[118px] md:top-[118px] sm:top-[92px] left-0 absolute h-screen p-4 ${MenuVisible} bg-white border`}>
  {navs.map((item, index) => (
    <div className='grid grid-cols-{navs.length}' key={index}>
      <NavLink
        activeclassname="active-category"
        className='text-[12px] hover:text-slate-600 my-4 uppercase duration-200 font-light mr-6' to={`/${item}`}>
        {item}
      </NavLink>
    </div>
  ))}
  <div className='mt-4' >
    <i className='bx bx-sm hover:text-blue-500 duration-500 bxl-instagram'></i>
    <i className='bx bx-sm hover:text-blue-500 duration-500 bxl-twitter'></i>
    <i className='bx bx-sm hover:text-blue-500 duration-500 bxl-snapchat'></i>
  </div>
</div>

            </div>
          <div>
            <NavLink to="/">

                {/* logo */}
              <div className='-space-y-3 flex flex-col items-center'>
                <p className='font-extrabold uppercase text-2xl'>Kicks</p>
                <p className='font-extrabold uppercase text-2xl'>Nation</p>
              </div>
            </NavLink>
          </div>
          <div className='flex gap-4 items-center'>
            <div>
            <NavLink to="/cart"><i className='bx p-1  bx-shopping-bag'></i></NavLink>
            </div>
            <div>
            <i className='bx p-1  bx-user'></i>
            </div>
          </div>
        </div>
        { /* Conditionally rendering the category-div div */ }
        { /* It will only be visible when the screen size is not sm */ }
        <div className='category-div lg:flex md:flex sm:hidden justify-center p-1 items-center'>
          {navs.map((item, index) => (
            <div className='grid lg:grid-cols-{navs.length}' key={index}>
              <NavLink
                activeclassname="active-category"
                className='text-[12px] hover:text-slate-600 uppercase duration-200 font-light mr-6' to={`/${item}`}>
                {item}
              </NavLink>
            </div>
          ))}
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
