import React from 'react'

function Product({department,product,cost,onClickAddButton}) {
  return (
    <div className='bg-gradient-to-b from-pink-200 to-purple-400 flex flex-col justify-between border-red-800 border-2 p-4 rounded-xl w-4/5 md:w-2/12 cursor-pointer hover:scale-110 hover:border-red-500 flex-shrink-2 '>
        
        <div className='md:text-xl font-semibold'>{department.toUpperCase()}</div>
        <div className='md:text-lg font-medium'>{product}</div>
        <div className='md:text-lg font-medium text-red-800'>{cost}₹</div>
        <button className='text-gray-200 md:text-xl font md:font-semibold bg-gradient-to-r from-green-400 to-blue-400 p-2 border-2 border-black rounded-xl active:bg-blue-200' onClick={onClickAddButton}>Add To Cart</button>
    </div>
  )
}

export default Product