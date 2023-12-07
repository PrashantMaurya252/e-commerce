import React from 'react'

function CartTotals({totalProducts,totalCost}) {
  return (
    <div className=' md:flex justify-evenly'>
        <div className='text-2xl font-bold'>Total Items: {totalProducts}</div>
        <div className='text-2xl font-bold'>Total Cost: {totalCost}</div>
    </div>
  )
}

export default CartTotals