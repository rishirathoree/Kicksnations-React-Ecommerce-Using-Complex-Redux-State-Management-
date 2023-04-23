import { useRef, useState,useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';
import { useSelector } from 'react-redux';
import { UserAuth } from '../Context/AuthContextProvider';
const navs = ['footwear','apparel','girls','basketball','slides','accessories'];
import dp from '../images/dp.png'
const Navbar = () => {
  const {user,logout} = UserAuth()
  const menuSidebar = useRef(null)
  const userInfos = useRef(null)
  const [userInfo,setuserInfo] = useState(false)
  const [MenuVisible, setMenuVisible] = useState('-translate-x-full')
  const Cart = useSelector((state)=>state.Cart.cart)
  const toggleMenu = () => {
    setMenuVisible(MenuVisible === '-translate-x-full' ? 'translate-x-0' : '-translate-x-full')
  }
  const handleLogout = async () => {
    try{
      await logout()
    }
    catch(e){
      console.log(e.message)
    }
  }
  const toggleUserInfo = () => {
    setuserInfo(userInfo === false ? true : false)
  }
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (menuSidebar.current && !menuSidebar.current.contains(event.target)) {
        setMenuVisible('-translate-x-full');
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (userInfos.current && !userInfos.current.contains(event.target)) {
        setuserInfo(false);
      }
    };

    document.addEventListener('click', handleDocumentClick);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
    };
  }, []);
  return (
    <>
      <div className='w-full fixed top-0 z-50 bg-white right-0 p-1 shadow'>
        <div className='w-full h-full  p-4 flex justify-between items-center'>
            <div ref={menuSidebar} className='Menu-sidebar'>
            <div className="menu-toggle p-1" onClick={toggleMenu}>
      <div className={`duration-300 ${MenuVisible === 'translate-x-0' ? 'translate-y-[5px] -rotate-45' : 'translate-y-0 rotate-0'} w-4 h-[1px] bg-black`}></div>
      <div className={`my-1 duration-300 ${MenuVisible === 'translate-x-0' ? 'hidden' : ''} w-4 h-[1px] bg-black`}></div>
      <div className={`duration-300 ${MenuVisible === 'translate-x-0' ? 'translate-y-1 rotate-45' : ''} w-4 h-[1px] bg-black`}></div>
    </div>
                {/* hamburger menusidebar  */}
                <div className={`lg:w-1/5 md:w-1/5 overflow-y-auto sm:w-2/5 duration-100 -z-[100] lg:top-[118px] md:top-[92px] sm:top-[92px] left-0 absolute h-screen p-4 ${MenuVisible} bg-white border`}>
                <NavLink
        activeclassname="active-category"
        className='text-[12px] hover:text-slate-600 uppercase duration-200 font-light py-1 px-3' to='/account'>
        My account
      </NavLink>
                <div className={`grid grid-cols-${navs.length}`} >
  {navs.map((items, index) => (
      <NavLink
      key={index}
        activeclassname="active-category"
        className='text-[12px] hover:text-slate-600 uppercase duration-200 font-light py-1 px-3' to={`/${items}`}>
        {items}
      </NavLink>
  ))}
  <NavLink
        activeclassname="active-category"
        className='text-[12px] hover:text-slate-600 uppercase duration-200 font-light py-1 px-3' to='/cart'>
        Cart
      </NavLink>
      
    </div>

  <div className=' mt-12' >
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
            <div className='relative'>
            <NavLink to="/cart">
              <i className='bx p-1 border rounded-md bx-shopping-bag'>
              </i>
              {Cart.length > 0 && <div className={`w-[10px] h-[10px] -top-1 -right-1 absolute rounded-full bg-black`}></div>}
              </NavLink>
            </div>
            <div className='lg:block md:block sm:hidden'>
              {!user ? <NavLink to="/account">
            <i
            className='bx p-1  bx-user'></i>
            </NavLink> 
            : 
            <div ref={userInfos} className='relative'>
              <div onClick={toggleUserInfo}  className='w-6 h-6 rounded-full profile-account flex items-center  overflow-hidden justify-center bg-gray-100'>
            <img src={dp} className='w-full h-full' alt="" />
          </div>
          <div className={`absolute User-info shadow z-[100] bg-white duration-100 profile-accout flex-col flex justify-end p-2 w-max rounded-md  top-10 right-0 ${userInfo ? 'translate-y-0 scale-100 visible' : 'invisible scale-75 -translate-y-2 '}`}>
          <NavLink to="/account">
          <p className='font-light text-xsm p-1 text-right'>User Account</p>
          </NavLink>
          <button 
          onClick={handleLogout}
          className='font-light text-xsm p-1 text-right'>Logout</button>
          </div>
            </div>
            }
            
            </div>
          </div>
        </div>
        { /* Conditionally rendering the category-div div */ }
        { /* It will only be visible when the screen size is not sm */ }
        <div className='category-div lg:flex md:hidden sm:hidden justify-center p-1 items-center'>
          <div className='flex justify-center items-center gap-4' >
          {navs.map((item, index) => (
              <NavLink key={index}
                activeclassname="active-category"
                className='text-[12px] hover:text-slate-800 uppercase duration-200 font-light mr-8' to={`/${item}`}>
                {item}
              </NavLink>
          ))}
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
