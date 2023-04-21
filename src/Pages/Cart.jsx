import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import jordans from '../images/jordans.png'
import { EmptyCart, RemoveCart } from '../actions/Cartaction'

const Cart = () => {
    const Cart = useSelector((state)=>state.Cart)
    const dispatch = useDispatch()
    const totalPrice = Cart.cart.reduce((accmulator,items)=>accmulator + items.price,0)
    console.log(totalPrice);
  return (
    <div className='lg:mt-[116px] p-4 md:mt-[116px] sm:mt-[92px]'>
      <div className='grid w-full h-full lg:grid-cols-2 gap-4 md:grid-cols-2 sm:grid-cols-1'>
        <div className='p-4 border cart-left-div   '>
          <div className='flex items-center py-4  border-black border-opacity-10 justify-between'>
            <p className='font-light text-xsm'>My Bag</p>
            <p className='font-light text-xsm'>Items are reserved in cart for 60 minutes.</p>
          </div>
          <div className='items-showcase-cart'>
           {
            Cart && Cart.cart.length > 0 && Cart.cart.map((items)=>{
              return (
                <div key={items.id} className='cart-item border-t flex  py-4 justify-between'>
              <div className='flex'>
              <div className='lg:w-40 lg:h-40 md:w-40 md:h-40 sm:w-24 sm:h-24 flex items-center flex-col justify-center'>
                <img src={jordans} className='' alt="" />
                </div>
                <div>
                <p className='font-bold uppercase text-xsm'>{items.category}</p>
                <p className='font-light text-xsm'>{items.title}</p>
                <p className='font-light text-xsm'>Price : {items.price}</p>
                <div className='flex items-center gap-4'>
                <select className='focus:outline-none font-xsm bg-slate-50 rounded-sm'>
                <option className='font-xsm font-light selected disabled'>Qty</option>
                  <option className='font-xsm font-light'>1</option>
                  <option className='font-xsm font-light'>2</option>
                  <option className='font-xsm font-light'>3</option>
                </select>
                <select className='focus:outline-none font-xsm bg-slate-50 rounded-sm'>
                  <option className='font-xsm font-light selected disabled'>Size</option>
                  <option className='font-xsm font-light'>s</option>
                  <option className='font-xsm font-light'>m</option>
                  <option className='font-xsm font-light'>lg</option>
                </select>
                </div>
                </div>
              </div>
              <div>
                <i 
                onClick={()=>{
                  dispatch(RemoveCart(items.id))
                }}
                className='bx bx-x'></i>
              </div>
            </div>
              )
            })
           }
          </div>
        </div>
        <div className='cart-right-div'>
          <div>
            <p className='font-bold text-xsm'>Checkout</p>
            <div className='flex items-center justify-between'>
            <p className='font-bold my-2 text-xsm'>Total</p>
            <p className='font-bold text-xsm'>$ {totalPrice}</p>
            </div>
            <div className='flex items-center justify-between'>
            <p className='font-bold my-2 text-xsm'>SHIPPING CHARGES</p>
            <p className='font-bold text-xsm'>${(totalPrice/99).toFixed(2)} <i title='We take one percent of total amount' className='bx bx-error-circle'></i> </p>
            </div>
            <button className='font-light text-xs bg-black text-white w-full p-3'>Checkout</button>
            <button 
            onClick={()=>{dispatch(EmptyCart())}}
            className='font-light mt-4 text-xs bg-black text-white w-full p-3'>REMOVE ALL ITEMS</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart