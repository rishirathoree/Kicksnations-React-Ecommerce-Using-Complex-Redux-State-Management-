import React, { useEffect } from 'react';
import jordans from '../images/jordans.png';
import { FetchUser } from '../actions/Productaction';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Shoesimageslider } from '../components/Shoesimageslider';
import Textslider from '../components/Textslider';

export const Home = () => {
  const dummy = [1, 2, 3, 4, 5, 6,7,8,8,9];
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(FetchUser());
  }, [dispatch]);

  const { data, pending, error } = useSelector((state) => state.Products);

  return (
    <>
      <Shoesimageslider />
      <Textslider />
      <div className=''>
        <div className='grid lg:grid-cols-5 sm:grid-cols-2 md:grid-cols-3'>
          {pending ? (
            dummy.map((items,index)=>{
                return(
                    <div key={index} className='product-img h-60 flex animate-pulse items-center justify-center  w-full'>
              <img src={jordans} className='w-9 h-8 ' alt='' />
            </div>
                )
            })
          ) : (
            data &&
            data.products &&
            data.products.map((items) => {
              return (
                <Link key={items.id} to={`/products/${items.id}`}>
                  <div className='w-full h-full bg-[#f5f5f7e2]'>
                  <div className='product-img h-60 flex items-center justify-center  w-full'>
                    <img src={jordans}  alt='' />
                  </div>
                  <div className='flex flex-col info-div items-center justify-center'>
                    <p className='font-light text-[10px]  text-center mt-2 '>
                      {items.category}
                    </p>
                    <p className='font-bold text-[10px]  text-center mt-2 '>
                      {items.title}
                    </p>
                    <p className='font-light text-[12px]  text-center mt-2 '>
                      $ {items.price}
                    </p>
                  </div>
                </div>
                </Link>
              );
            })
          )}
          {error ? (
            dummy.map((items,index)=>{
              return(
                  <div key={index} className='product-img  h-60 flex flex-col animate-pulse items-center justify-center w-full'>
            <img src={jordans} alt='' />
            <p className='font-light text-[12px]'>Slow down, put sneakers on.</p>
          </div>
              )
          }) 
          ) : null}
        </div>
      </div>
    </>
  );
};
