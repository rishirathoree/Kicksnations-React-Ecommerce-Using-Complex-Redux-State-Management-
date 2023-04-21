import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import jordans from '../images/jordans.png'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/Cartaction'
const Product = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const dispatch = useDispatch()
  const products = useSelector((state) => state.Products.data.products);
  const singleProduct = products.find((product)=>product.id === parseInt(id))
  const {brand,title,price,description} = singleProduct
  console.log(brand);
  return (
    <div className='mt-32 flex w-full h-full'>
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4'>
            <div className='w-full h-full flex items-center'>
                <img src={jordans} alt="" />
            </div>
            <div className='p-4'>
            <p className='font-light text-[14px] lg:text-left md:text-left sm:text-center mt-2'>{brand}</p>
            <p className='font-bold text-[10px] mt-2 lg:text-left md:text-left sm:text-center'>{title}</p>
            <p className='font-light text-[12px]  mt-2 lg:text-left md:text-left sm:text-center'>₹{price}</p>
            <p className='font-light text-[12px]  mt-2 '>MRP inclusive of all taxes</p>
            <p className='font-light text-[10px]  mt-2 '>{description}</p>
            <ul className='my-4'>
                <li  className='font-bold text-[10px] w-2/3'>Lace closure</li>
                <li  className='font-bold text-[10px] w-2/3'>Lace closure</li>
                <li  className='font-bold text-[10px] w-2/3'>Lace closure</li>
                <li  className='font-bold text-[10px] w-2/3'>Lace closure</li>
                <li  className='font-bold text-[10px] w-2/3'>Lace closure</li>
                <li  className='font-bold text-[10px] w-2/3'>Lace closure</li>
            </ul>
            <button
            onClick={()=>{
                dispatch(addToCart(singleProduct),
                navigate('/cart')
                )}}
            className='w-full font-light text-[10px] p-3 bg-black text-white'>ADD TO CART</button>
            </div>
        </div>
    </div>
  )
}

export default Product