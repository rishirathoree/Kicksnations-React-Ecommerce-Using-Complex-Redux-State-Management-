import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const Cart = useSelector((state)=>state.Cart)
    console.log(Cart);
  return (
    <div className='mt-32'>Cart</div>
  )
}

export default Cart