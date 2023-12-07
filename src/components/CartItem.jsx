import React from 'react'

function CartItem({product,quantity,cost,onQuantityChange,onItemRemove}) {
  return (
    <div className='md:flex  justify-between items-center  bg-gray-200 border-2 border-black m-2 p-3 rounded-xl '>
        <div className='text-2xl font-semibold'>{product}</div>
        <div>
            <input className='text-xl bg-gray-200' type="number" defaultValue={quantity} min='1' onChange={e=>onQuantityChange(Number(e.target.value))} onKeyUp={e=>{if(e.keyCode===13){
                onQuantityChange(Number(e.target.value))
            }}} />
        </div>
        <button className='text-xl font-semibold hover:bg-red-500 bg-red-800 text-gray-200 w-min p-2 m-2 rounded-xl' onClick={onItemRemove}>Remove</button>
        <div className='text-2xl font-medium'>Cost:{cost}</div>
        <div className='text-2xl font-medium'>Total Cost:{cost*quantity}</div>
    </div>
  )
}

export default CartItem