import React from 'react'
import Pagewrapper from '../components/Pagewrapper'

const Order = () => {
  return (
    <Pagewrapper>
      <h2 className='text-xl font-semibold p-5'>Your Orders are...</h2>
      <div className='flex gap-5 px-5'>
        <div className='border border-gray-50 bg-gray-100 rounded-2xl aspect-square w-[15%] flex  flex-col justify-center items-center'>
          <h1 className='text-[500%]  font-bold'>96</h1>
          <p className='text-lg font-semibold text-emerald-300'>Placed</p>
        </div>
        <div className='border border-gray-50 bg-gray-100 rounded-2xl aspect-square w-[15%] flex  flex-col justify-center items-center'>
          <h1 className='text-[500%] font-bold'>96</h1>
          <p className='text-lg font-semibold text-emerald-500'>Recieved</p>
        </div>
        <div className='border border-gray-50 bg-gray-100 rounded-2xl aspect-square w-[15%] flex  flex-col justify-center items-center'>
          <h1 className='text-[500%] font-bold'>96</h1>
          <p className='text-lg font-semibold text-emerald-600'>Shipping</p>
        </div>
      </div>
      
    </Pagewrapper>
  )
}

export default Order
