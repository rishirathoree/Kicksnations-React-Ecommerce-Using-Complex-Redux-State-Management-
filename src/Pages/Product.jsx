import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import jordans from '../images/jordans.png'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../actions/Cartaction'
import { FetchUser } from '../actions/Productaction'
const Product = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const dispatch = useDispatch()
  const Data = useSelector((state) => state.Products.data);
  const result = useSelector((state) => state.Products.data.products);
  useEffect(() => {
    dispatch(FetchUser());
  }, [dispatch]);
  const singleProd = result && result.find((item) => item.id === parseInt(id));
  // taking the items needed to display from the object 
  const{brand,title,price,description} = singleProd
  const similarProducts = result.filter((item)=>item.category === singleProd.category && item.id !== singleProd.id)
  console.log(singleProd);

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0)
    }
    return () => {
      scrollToTop()
    }
  }, [])
    
  return (
    <>
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
                <li  className='font-bold text-[10px] w-2/3'>Classification of products comes here.</li>
            </ul>
            <button
            onClick={()=>{
                dispatch(addToCart(singleProd)
                )}}
            className='w-full font-light text-[10px] p-3 bg-black text-white'>ADD TO CART</button>
            <div className='flex items-center gap-4 mt-4 justify-between'>
            <button 
            onClick={()=>{history.back()}}
            className='w-full font-light text-[10px] p-3 bg-black text-white'>GO BACK</button>
            <button 
            onClick={()=>{navigate('/cart')}}
            className='w-full font-light text-[10px] p-3 bg-black text-white'>GO TO CART</button>
            </div>
            </div>
        </div>
    </div>
    <div className='w-full p-4 h-full'>
        <p className='font-lighter text-xsm'>Similar Products</p>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4'>
        {similarProducts.splice(0,4).map((items)=>{
            return(
                <Link key={items.id} to={`/products/${items.id}`}>
                    <div key={items.id} className='w-full h-full bg-[#f5f5f7e2]'>
                  <div className='product-img h-60 flex items-center justify-center  w-full'>
                    <img src={jordans}  alt='' />
                  </div>
                  <div className='flex flex-col info-div items-center justify-center'>
                    <p className='font-light text-[10px]  text-center mt-2 '>
                    {items.brand}
                    </p>
                    <p className='font-bold text-[10px]  text-center mt-2 '>
                    {items.title}
                    </p>
                    <p className='font-light text-[12px]  text-center mt-2 '>
                    {items.price}
                    </p>
                  </div>
                </div>
                </Link>
            )
        })}
        </div>
    </div>
    </>
  )
}

export default Product