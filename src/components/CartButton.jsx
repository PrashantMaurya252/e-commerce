import React from 'react'

function CartButton({items,onClick}) {
  return (
    <button className='bg-gray-200 p-2 border-solid border-red-200 border-2 rounded-xl hover:bg-blue-600 hover:text-gray-200 text-lg font-semibold' onClick={onClick}>CART {items>0 ?<span className='bg-red-700 p-1 rounded-full text-white'>{items}</span>:null}</button>
  )
}

export default CartButton